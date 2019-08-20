const express = require('express')
const router = express.Router()
const path = require('path')
router.get('/', function(req, res, next) {
    const register = path.join(__dirname, '../views', 'rejister.html')
    res.sendFile(register)
})

router.post('/', function(req, res, next) {
    res.send('注册')
})
module.exports = router