//不牵扯计算，只负责接收app.js文件的数据
const math = require('../models/math.js');
exports.showResult = function (req,res) {
    let number = req.params.number;
    let start = new Date();//储存初始时间
    let result = math(number);
    console.log(result);
    res.render('showResult',{
        result,
        t:new Date() - start
    });
}