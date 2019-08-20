const express = require('express')
    //引入静态文件路径
const path = require('path')
const ejs = require('ejs')
const url = require('url')
const signin = require('./routers/signin')
const page = require('./routers/posts')
const rejister = require('./routers/rejister')
const comments = require('./routers/comments')
const logining = require('./routers/logining')
const session = require('express-session')
const getTest = require('./mongodb')
const app = express()
const conMongodb = require('./mongodb2')
const querystring = require('querystring')

var User = require('./user')
var article = require('./user2')
app.get('/', function(req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})


//  POST 请求
//构建自己的api接口
//1.注册接口
app.post('/add', function(req, res) {
        // console.log(req)
        var Data = ''
        req.on('data', chunk => {
            Data += chunk
            console.log(Data) //拿到了前端的数据

        })
        req.on('end', function() {
            // data = querystring.parse(data)
            console.log('后端data', typeof(Data))
            Data = JSON.parse(Data)
            console.log(typeof(Data))
            console.log(Data)
            let userDate = new User({
                username: Data.user['userName'],
                passWord: Data.user['passWord'],
                logindate: new Date()
            })
            userDate.save((err, res) => {
                    if (err) {
                        console.log('error' + err)
                    } else {
                        console.log('res' + res)
                    }
                })
                // getTest.GetTest(Data, 1, function(err, data) {
                //     if (err) {
                //         console.log(err)
                //     } else {
                //         console.log(data)
                //     }
                // })

        })
        console.log("主页 POST 请求");
        res.send('成功');
    })
    //2.取得注册成功的数据，返回给前端
app.get('/re', function(req, res) {
        console.log('返回注册数据')
        User.find().then(data => {
                console.log('数据库中的数据要返回给前端' + data)


                res.send(data)
            })
            // console.log(conMongodb)
            // conMongodb.find({}).then(res => {
            //         console.log(res)
            //     })
            // console.log(conMongodb())
            // conMongodb.then(res => {
            //     console.log(res)
            // })

        //这里是回调函数
        //将获取数据库数据改变为异步 
        // getTest.GetTest('', 3, function(data) {
        //         console.log('RE请求的数据' + data)
        //             // if (err) {
        //             //     console.log(err)
        //             // } else {
        //             //     console.log('我是get中的数据' + data)
        //             //     Data = data
        //             // }
        //         res.json({
        //             'data': data
        //         })

        //     })
        // console.log(data)
        // res.JSON({
        //         result: data
        //     })
        // console.log('将要发送的数据' + Data)
        // res.send(Data)

    })
    //添加文章接口
app.post('/addArticle', function(req, res) {

    console.log('添加文章了')
    data = ''
    req.on('data', function(chunk) {
        data += chunk
        console.log(data)

    })
    req.on('end', function() {
        console.log('接收到的数据' + data)
        data = JSON.parse(data)
        console.log('data类型' + typeof(data))
        let userArticle = new article({
            Author: data.title,
            article: data.wraper,
            creatTime: new Date()
        })
        userArticle.save((err, data) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log('添加成功后的数据' + data)
                res.send('成功')

            }
        })
    })
})
app.get('/addArticle', function(req, res) {
    console.log('返回添加的文章内容')
    article.find().then(data => {
        console.log('文章内容' + data)
        res.send(data)

    })
})

//  /del_user 页面响应
app.get('/del_user', function(req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function(req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
        console.log("/ab*cd GET 请求");
        res.send('正则匹配');
    })
    // app.disable('view cache');
    //配置静态文件路径
    // app.use(express.static(path.join(__dirname, './public')));
    // app.engine('html', ejs.__express)
    // app.set('view engine', 'html')

app.get('/', function(req, res) {
    // console.log(req)
    console.log('get请求了')
    res.send('Hello')
        //使用模板引擎将模板改变成html文件
        // var user = url.parse(req.url, true)
        // var name = user.query['username']
        // var psw = user.query['password']
        //     // console.log(getTest.GetTest())
        //     // console.log(name, psw)
        // var data = {
        //         password: psw,
        //         name: name
        //     }
        //     // console.log('这个是data数据' + data['name'])
        //操作数据库
        // getTest.GetTest(data, 1)
        // const login = path.join(__dirname, 'views', 'login.html')
        //     // console.log(login)

    // res.sendFile(login)
})
app.post('/de', function(req, res) {
        console.log('主页请求Post')
        res.send('Post')
            // console.log('Post请求了')
            // var data = ''
            // req.on('data', chunk => {
            //     data += chunk
            //     console.log(data)
            // })
            // req.on('end', function(req, res) {
            //     data = querystring.parse(data)
            //     console.log(data)
            // })
            // console.log(req)
            // res.send(data)
    })
    //静态模板
    // app.use('/signin', signin)
    // app.use('/page', page)

// app.use('/comments', comments)
// app.use('/rejister', rejister)
// app.use('/logining', logining)
// app.use('/page', page)
// routes(app)
app.listen('3000', function() {
    console.log('127.0.0.1:3000')
})