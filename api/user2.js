let mongoose = require('./mongodb2')


var ArticleScheam = mongoose.Schema({
    Author: String,
    article: String,
    creatTime: Date,

})
module.exports = mongoose.model('Article', ArticleScheam)