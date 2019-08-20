const express = require('express')
const router = express.Router()
const path = require('path')
var GetTest = require('../mongodb')
var util = require('util')
var querystring = require('querystring')
var comment = path.join(__dirname, '../views', 'comments.html')

router.post('/', function(req, res, callback) {

        // res.send('我是留言页面')
        console.log('我是post请求')
        var data = ''
        req.on('data', function(chunk) {
            console.log('chunk', chunk)
            data += chunk;
            console.log('chunk', data)
        })
        req.on('end', function(req, response) {

                data = querystring.parse(data)
                console.log(data['text'])
                var Data = {
                    value: data['text']
                }
                GetTest.GetTest(Data, 1)
                    // res.end(util.inspect(data))
                    //由于变量名重名
                res.status(200).json({ msg: '登陆成功', url: "/comments", Data: data })
            })
            // res.status(200).json({ msg: '登陆成功', url: "/comments", Data: data })
            // res.setHeader('Cache-Control', 'no-cache')
            // res.redirect('signin')
            // res.location('signin')
            // console.log('这个是On外面的数据' + data)
            // res.status(200).json({ msg: '登陆成功', url: "/comments", Data: data })

        // res.status(200).json({ msg: '登陆成功', url: "/comments", Data: data })


        // res.sendFile(comment)

        // const comment = path.join(__dirname, '../views', 'comments.html')
        // res.render('comments')
        //     // console.log(comment)
        // res.send('<li>{{data}}</li>')
        // res.send('留言页面')
        // res.sendFile(comment)
        // console.log(comment)
        // res.setHeader('Cache-Control', 'no-cache');
        // res.render('comments')
        // console.log('我要跳转了')
        // res.redirect('/comment')

    })
    // router.get('/', function(req, res, callback) {
    // getData = ''
    // GetTest.GetTest('', 3, function(data) {
    //     // console.log('这个是回调后输出的')
    //     // console.log(data)
    //     getData += data
    //         // console.log('我是getData数据' + getData)
    //     console.log('我是get中的数据' + data)
    //         // return getData
    // })
var dbGet = function() {
    GetTest.GetTest('', 3, function(data) {
        // console.log('一个方法中的' + data)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log('我是Promise的' + data)

            }, 500);
        })
    })
}

router.get('/', function(req, res) {
        // console.log(GetTest)

        GetTest.GetTest('', 3, function(err, data) {
                if (err) {
                    res.send(err)
                } else {
                    console.log(data)
                    res.send(data)
                }
            })
            // console.log(GetTest.GetTest)
            // console.log(dbGet)
            // console.log(GetTest.GetTest())


        // res.status(200).json({ msg: '登陆成功', url: "/comments" })
        // await data;
        // console.log('异步的data数据' + data)
        // GetTest.GetTest('', 3, function(data) {
        //     // console.log('这个是回调后输出的')
        //     // console.log(data)
        //     getData += data
        //         // console.log('我是getData数据' + getData)
        //     console.log('我是get中的数据' + data)
        //         // return data
        //         // return getData
        // })

    })
    // res.redirect('signin')
    // res.sendFile(comment)
    // res.sendFile(comment)
    // console.log('前面传来的数据')
    // res.redirect('comments')



module.exports = router