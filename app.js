const express = require('express');
const controller =require('./controller/controller.js');
const path= require('path');
const app = express();

//req.params.变量  这个对象储存了对应路由规则：变量后面的值
//res.send(数据) 传递数据作为结束响应的标志
//res.render()   专门用来渲染views目录下的ejs页面
//ejs 是后台模板  1.可以在<% js代码 %>  2.可以在<%= 变量 %>




app.set('view engine','ejs');
app.get('/:number',controller.showResult);

app.use(express.static('public'));
app.listen(5000);
