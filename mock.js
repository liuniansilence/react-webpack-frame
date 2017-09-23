var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
// 端口号
app.listen(8888);
console.log('server start');

/******************demo【start】************************/
// 1、常规mock get
var demo1 = require('./mock/home/home.json');
var demo2 = require('./mock/detail/detail.json');
// 1.1 get方式
app.get('/prefix/demo1', function (req, res) {
    res.send(demo1);
});
// 1.2 post方式
app.post('/prefix/demo1', function (req, res) {
    res.send(demo1);
});
// 2、数据返回延迟
app.get('/prefix/demo2', function (req, res) {
    setTimeout(function () {
        res.send(demo1);
    }, 3000);
});
// 3、根据条件返回不同json get方法
app.get('/prefix/demo3', function (req, res) {
    if (req.query.type === '1') {
        res.send(demo1);
    }
    else {
        res.send(demo2);
    }
});
/******************demoo【end】************************/
