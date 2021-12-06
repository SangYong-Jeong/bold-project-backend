const Router = require('koa-router');
const graphic = new Router();

const test = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

graphic.get('/', test);
graphic.post('/', test);
graphic.get('/:id', test);
graphic.delete('/:id', test);
graphic.put('/:id', test);
graphic.patch('/:id', test);

module.exports = graphic;
