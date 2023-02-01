// モジュールの読み込み
require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT
const bodyParser = require('body-parser');
const session = require('express-session');

// Expressの設定
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'secretsecretsecret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: true,
}));

// ルーティング
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

// サーバ起動
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});