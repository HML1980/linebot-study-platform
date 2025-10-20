require('dotenv').config();
const express = require('express');
const cors = require('cors');
const line = require('@line/bot-sdk');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// LINE Bot 設定
const lineConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET
};

// 建立 LINE Bot client
const lineClient = new line.Client(lineConfig);

// 中間件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 靜態文件
app.use(express.static(path.join(__dirname, '../liff/public')));

// 資料庫連接
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// 引入路由
const botRoutes = require('./routes/botRoutes');
const apiRoutes = require('./routes/apiRoutes');

// 使用路由
app.use('/webhook', botRoutes);
app.use('/api', apiRoutes);

// LIFF 頁面路由
app.get('/liff', (req, res) => {
  res.sendFile(path.join(__dirname, '../liff/index.html'));
});

// 啟動服務器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
