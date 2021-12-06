const Router = require('koa-router');
const packages = new Router();
const packageCtrl = require('./package.ctrl');
const validationId = require('../../../middlewares/validation');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');

packages.get('/', packageCtrl.list);
packages.post('/', writeValidation, packageCtrl.write);

const package = new Router();

package.get('/:id', packageCtrl.read);
package.delete('/:id', packageCtrl.remove);
package.patch('/:id', updateValidation, packageCtrl.update);

packages.use('/:id', validationId, package.routes());

module.exports = packages;
