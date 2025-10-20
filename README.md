# LINE Bot 學習平台

一個結合 LINE Bot 和 LIFF 介面的多科目學習平台，專注於國文、英文、企業管理、法學緒論、管理學和經濟學科目的內容和題庫。

## 功能特點

- 透過 LINE Bot 快速學習和測驗
- LIFF 網頁介面提供更完整的學習體驗
- 包含六大科目的學習內容和題庫
- 將部署於 DigitalOcean 平台

## 技術堆疊

- LINE Messaging API
- LINE Front-end Framework (LIFF)
- Node.js
- Express.js
- MongoDB (資料庫)
- DigitalOcean (部署平台)

## 科目

1. 國文
2. 英文
3. 企業管理
4. 法學緒論
5. 管理學
6. 經濟學

## 專案結構
```javascript
linebot-study-platform/
├── server/                // 後端伺服器
│   ├── controllers/       // 控制器
│   ├── models/            // 資料模型
│   ├── routes/            // API 路由
│   └── config/            // 設定檔
├── line-bot/              // LINE Bot 相關
│   ├── handlers/          // 訊息處理器
│   ├── templates/         // 訊息模板
│   └── events/            // 事件處理
├── liff-app/              // LIFF 前端應用
│   ├── public/            // 靜態檔案
│   ├── src/               // 源碼
│   │   ├── components/    // UI 元件
│   │   ├── pages/         // 頁面
│   │   ├── services/      // 服務
│   │   └── styles/        // 樣式
│   └── index.html         // 主頁面
├── data/                  // 科目內容和題庫
│   ├── chinese/           // 國文
│   ├── english/           // 英文
│   ├── business-admin/    // 企業管理
│   ├── law-intro/         // 法學緒論
│   ├── management/        // 管理學
│   └── economics/         // 經濟學
├── .env                   // 環境變數 (gitignore)
├── .gitignore             // Git 忽略檔案
├── package.json           // 套件資訊
└── README.md              // 專案說明
```

## 安裝與使用

1. Clone 專案
```
git clone https://github.com/[您的使用者名稱]/linebot-study-platform.git
cd linebot-study-platform
```

2. 安裝相依套件
```
npm install
```

3. 設定環境變數
建立 `.env` 檔案並填入以下資訊：
```
LINE_CHANNEL_ACCESS_TOKEN=你的LINE頻道存取權杖
LINE_CHANNEL_SECRET=你的LINE頻道密鑰
LINE_LIFF_ID=你的LIFF ID
MONGODB_URI=MongoDB連接字串
```

4. 啟動專案
```
npm start
```

## 部署

本專案計劃部署於 DigitalOcean。部署指南將在後續更新。

## 授權

[MIT](LICENSE)
```

## 3. 專案基本檔案結構

建立完專案後，您可以按照 README 中的結構來組織檔案。首先建立最基本的目錄結構：
```
mkdir -p server/controllers server/models server/routes server/config
mkdir -p line-bot/handlers line-bot/templates line-bot/events
mkdir -p liff-app/public liff-app/src/components liff-app/src/pages liff-app/src/services liff-app/src/styles
mkdir -p data/chinese data/english data/business-admin data/law-intro data/management data/economics
touch .env package.json
