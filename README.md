# blue-app

> My Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## koa的安装使用
```
npm install -g koa-generator

koa2 -e koa2-learn（文件名称）

cnpm install

DEBUG=koa2-learn:* npm start 

npm run dev （热更新用这个）
```

## koa的中间件
```
function pv(ctx) {
    global.console.log('pv', ctx.path)
}
module.exports = function () {
    return async function (ctx, next) {
        pv(ctx)
        await next()  //next()不能少
    }
}
```
## koa的路由
```
function pv(ctx) {
    global.console.log('pv', ctx.path)
}
module.exports = function () {
    return async function (ctx, next) {
        pv(ctx)
        await next()  //next()不能少
    }
}
```
## MongoDB的运用
```
测试MongDB是否安装成功
（1）打开cmd命令行
（2）进入C:\Program Files\MongoDB\Server\4.2\bin目录
（3）输入如下的命令启动mongodb服务：mongod --dbpath D:\data\db
```

## mongoose的运用
```
npm install mongoose
```
### 新建目录dbs
![](https://user-gold-cdn.xitu.io/2020/3/28/17121c41e88db842?w=250&h=89&f=png&s=3950)
### 其config.js的代码
```
module.exports = {
    dbs: 'mongodb://127.0.0.1:27017/dbs'
}
```
### 其person.js的代码
```
const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({name: String, age: Number})

module.exports = mongoose.model('Person', personSchema)
```
### 路由其index.js的代码
![](https://user-gold-cdn.xitu.io/2020/3/28/17121c58d99f5cd7?w=242&h=68&f=png&s=2598)

```
router.post('/addPerson', async function (ctx) {
  const person = new Person({ name: ctx.request.body.name, age: ctx.request.body.age })
  let code
  try {
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})
```
### 测试
```
curl -d 'name=heishu&age=6' http://localhost:3000/users/addPerson
```
![](https://user-gold-cdn.xitu.io/2020/3/28/17121c84d2b3094c?w=889&h=312&f=png&s=40891)

### 补充 删查改
```
router.post('/getPerson', async function (ctx) {
  const result = await Person.findOne({ name: ctx.request.body.name })
  const results = await Person.find({ name: ctx.request.body.name })
  ctx.body = {
    code: 0,
    result,
    results
  }
})

router.post('/updatePerson', async function (ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).update({
    age: ctx.request.body.age
  })
  ctx.body = {
    code: 0
  }
})

router.post('/removePerson', async function (ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()

  ctx.body = {
    code: 0
  }
})
```

```
curl -d 'name=heishu' http://localhost:3000/users/getPerson
curl -d 'name=heishu&age=20' http://localhost:3000/users/updatePerson
curl -d 'name=heishu' http://localhost:3000/users/removePerson
```

## redis的使用
```
C:\Program Files\Redis 目录

redis-server.exe redis.windows.conf
```

### window下启动redis服务报错：creating server tcp listening socket 127.0.0.1:6379: bind No error
```
的解决方案如下按顺序输入如下命令就可以连接成功
redis-cli.exe
shutdown
exit
redis-server.exe redis.windows.conf
```

### 运用
```
cnpm i koa-generic-session koa-redis
```
![](https://user-gold-cdn.xitu.io/2020/3/29/1712467e0794b9ef?w=247&h=139&f=png&s=5863)
#### 在app.js中
```
const session = require('koa-generic-session')
const Redis = require('koa-redis')
app.keys=['keys','keyskeys']
app.use(session({
  key:'mt',
  prefix:'mtpr',
  store:new Redis()
}))
```
### 在redis查看session
```
redis-cli

keys *

get mtprLlJRyaXaOxZxeDwJjU4FoscxP9Woko3w
```
### 直接操作redis
![](https://user-gold-cdn.xitu.io/2020/3/29/17124a3576776af9?w=260&h=86&f=png&s=3596)

```
const Redis = require('koa-redis')
const Store = new Redis().client
router.get('/fix',async function(ctx){
  const st = await Store.hset('fix','name',Math.random())
  ctx.body={
    code:0
  }
})
```

![](https://user-gold-cdn.xitu.io/2020/3/29/17124a74d0d8561c?w=439&h=134&f=png&s=7659)


