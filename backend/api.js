
/* 引入express框架 */
const express = require('express');
const app = express();
const cors=require('cors');
const bodyParser = require('body-parser')
const Pool = require('pg-pool');
require("dotenv").config();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* 监听端口 */
app.listen(3000, () => {
    console.log('——————————服务已启动——————————');
})

app.get("/", async (_, res) => {
    res.send("Hello from API");
  });