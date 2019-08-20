const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
var querystring = require('querystring')
const getTest = require('../mongodb')

router.post('/', function(req, res, next) {
    var data = ''
    req.on('data', function(chunk) {
        data += chunk
        console.log(data)
    })
    req.on('end', function(req, res) {
        data = querystring.parse(data)

        console.log(data)
        console.log('end里面的数据')
        getTest.GetTest(data, 1, function(err, data) {
            // console.log('我是数据库中的数据')
            // console.log(data)
            if (err) {
                console.log(err)
            } else {
                console.log('数据储存成功')
                console.log(data)
            }
        })
    })

    res.status(200).json({ msg: '登陆成功', url: "/page" })
})
router.get('/', function(req, res) {
    res.send('我是登陆页面')
})

module.exports = router