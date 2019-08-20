const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.send('登出')
})

module.exports = router