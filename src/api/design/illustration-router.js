const Router = require('koa-router');
const illustration = new Router();

const test = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

illustration.get('/', test);
illustration.post('/', test);
illustration.get('/:id', test);
illustration.delete('/:id', test);
illustration.put('/:id', test);
illustration.patch('/:id', test);

module.exports = illustration;
