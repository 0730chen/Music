let mongoose = require('./mongodb2')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: { type: String },
    passWord: { type: String },
    logindate: { type: Date }
})
module.exports = mongoose.model('User', UserSchema)