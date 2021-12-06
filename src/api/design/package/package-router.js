const Router = require('koa-router');
const package = new Router();
const packageCtrl = require('./package.ctrl');

package.get('/', packageCtrl.list);
package.post('/', packageCtrl.write);
package.get('/:id', packageCtrl.read);
package.delete('/:id', packageCtrl.remove);
package.patch('/:id', packageCtrl.update);

module.exports = package;
