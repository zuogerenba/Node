// 1.导入
const express = require('express');

// 2.创建app
const app =  express();

app.use((req, res, next) => {
  console.log('中间件');
  next();
})

// 4.做出处理
app.get('/home', (req, res, next) => {
  console.log("中间件01")
  next();
}, (req, res, next) => {
  console.log("中间件02")
}, (req, res, next) => {
  console.log("中间件03")
}, (req, res, next) => {
  console.log("中间件04")
  res.end('home page')
})

app.post('/login', (req, res, next) => {
  res.end('Please login~')
})

// 3.启动监听
app.listen(8000, () => {
  console.log('服务器启动成功~')
})