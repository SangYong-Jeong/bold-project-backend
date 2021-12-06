const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/user', (ctx) => {
  ctx.body = '유저';
});

router.get('/design', (ctx) => {
  ctx.body = '디자인';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
