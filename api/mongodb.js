 exports.GetTest = function(data, state, callback) {
     //  console.log('外部的数据' + todoList)
     const MongoClient = require('mongodb').MongoClient
     const url = "mongodb://127.0.0.1:27017"
     const dbName = 'b'




     MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
         //  console.log('这个外面的mongodb服务器')
         if (err) {
             console.log(err)
         }
         //  console.log("连接成功")
         const db = client.db(dbName)
         const col = db.collection('b')
             // col.insert(todoList)
             //  console.log('这是外面的todolist数据')
             //  console.log('这是外部的mongodb服务器')

         //  console.log('这是外部函数中的数据' + data)
         //  console.log('下面是要插入的数据')
         //  console.log(data)
         if (state === 1) {
             //增加数据
             console.log(data)
             col.insertOne(data, function(err, callback) {
                     if (err) {
                         console.log(err)
                     } else {
                         console.log(data)
                         console.log("成功")
                     }

                 })
                 //  col.find().toArray((err, res) => {
                 //      console.log('这个是增加数据的' + res)

             //  })
         }
         if (state === 2) {
             //删除数据
             col.remove(data, function(err, callback) {
                 if (err) {
                     console.log(err)
                 } else {
                     console.log("成功")
                 }

             })
         }
         if (state === 3) {
             //  查询数据
             //  console.log(col.find(data))
             //  console.log(col.find().pretty())
             col.find({ "data": "register" }).toArray((err, res) => {
                     data = JSON.stringify(res)
                     console.log('查询数据' + data)
                     callback(data)

                 })
                 //  col.find().pretty()
         }
         if (state === 4) {
             console.log('state=4的数据储存')
             console.log(data)
             col.find(data).toArray((err, res) => {
                 Data = JSON.stringify(res)
                 console.log(Data)
                 callback(err, Data)
             })

         }
         //  } else {
         //      col.remove(data, function(err, callback) {
         //          if (err) {
         //              console.log(err)
         //          } else {
         //              console.log("成功")
         //          }

         //      })
         //      col.find().toArray((err, res) => {
         //          console.log(res)

         //      })
         //  }
     })

 }