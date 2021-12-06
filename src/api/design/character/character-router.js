const Router = require('koa-router');
const character = new Router();

const test = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

character.get('/', test);
character.post('/', test);
character.get('/:id', test);
character.delete('/:id', test);
character.put('/:id', test);
character.patch('/:id', test);

module.exports = character;
