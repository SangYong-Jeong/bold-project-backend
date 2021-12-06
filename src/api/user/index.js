const Router = require('koa-router');
const user = new Router();

user.get('/login', (ctx) => {
  ctx.body = 'login test';
});

user.get('/logout', (ctx) => {
  ctx.body = 'logout test';
});

user.get('/join', (ctx) => {
  ctx.body = 'join test';
});

module.exports = user;
