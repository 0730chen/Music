const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/b"
mongoose.connect(url, { useNewUrlParser: true });

mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open to ' + url);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose