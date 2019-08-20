const express = require('express')
const router = express.Router()
const path = require('path')
    // const checkLogin = require('../middlewares/check')

router.get('/', function(req, res, next) {
    const page = path.join(__dirname, '../views', 'page.html')
    res.sendFile(page)
})
router.get('/header', function(req, res, next) {
    const page = path.join(__dirname, '../views', 'page.html')
    res.sendFile(page)
})
router.get('/learn', function(req, res, next) {
    const page = path.join(__dirname, '../views', 'learn.html')
    res.sendFile(page)

})
router.get('/interst', function(req, res, next) {
    const page = path.join(__dirname, '../views', 'interste.html')
    res.sendFile(page)
})
router.get('/daily', function(req, res, next) {
    // const login = path.join(__dirname, '../views', 'login.html')

    // res.sendFile(login)
    res.redirect('..');
})
router.get('/all', function(req, res, next) {
        const page = path.join(__dirname, '../views', 'comments.html')
        res.sendFile(page)
    })
    //发表一篇文章
    // router.post('/create', checkLogin, function(req, res, next) {
    //         res.send('发表文章')
    //     })
    //     //发表文章页
    // router.get('/create', checkLogin, function(req, res, next) {
    //         res.send('发表文章页')
    //     })
    //     //单独的文章页面
    // router.get('/:postId', function(req, res, next) {
    //     res.send('文章详情页')
    // })
    // router.get('/post/edit', checkLogin, function(req, res, next) {
    //     res,
    //     send('更新文章页')
    // })
    // router.post('/:postId/edit', checkLogin, function(req, res, next) {
    //     res.send('更新文章')
    // })
    // router.get('/:postId/remove', checkLogin, function(req, res, next) {
    //     res.send('删除文章')
    // })
module.exports = router