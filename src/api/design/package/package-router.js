const Router = require('koa-router');
const packages = new Router();
const packageCtrl = require('./package.ctrl');
const validationId = require('../../../middlewares/validation');

packages.get('/', packageCtrl.list);
packages.post('/', packageCtrl.write);

const package = new Router();

package.get('/:id', packageCtrl.read);
package.delete('/:id', packageCtrl.remove);
package.patch('/:id', packageCtrl.update);

packages.use('/:id', validationId, package.routes());

module.exports = packages;
