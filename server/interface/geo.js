import Router from 'koa-router';
import Article from '../dbs/models/article'
// import User from '../dbs/models/users'

let router = new Router({ prefix: '/geo' })


router.post('/article', async (ctx) => {
  const { id, type } = ctx.request.body;
  let article = await Article.find({ id, type })
  if (article.length) {
    ctx.body = {
      code: 1,
      data: article[0].list
    }
    return
  } else {
    ctx.body = {
      code: 0,
      msg: '无此城市数据'
    }
    return
  }
})

export default router;
