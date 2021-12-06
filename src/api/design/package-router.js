const Router = require('koa-router');
const package = new Router();

const test = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

package.get('/', test);
package.post('/', test);
package.get('/:id', test);
package.delete('/:id', test);
package.put('/:id', test);
package.patch('/:id', test);

module.exports = package;
