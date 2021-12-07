const Router = require('koa-router');
const packages = new Router();
const packageCtrl = require('./package.ctrl');
const validationId = require('../../../middlewares/validation-design');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');
const checkLoggedIn = require('../../../middlewares/checkLoggedIn');
const validationPost = require('../../../middlewares/validation-post');
const Package = require('../../../models/design/package');
const checkOwnPost = require('../../../middlewares/checkOwnPost');

packages.get('/', packageCtrl.list);
packages.post('/', checkLoggedIn, writeValidation, packageCtrl.write);

const package = new Router();

package.get('/:id', packageCtrl.read);
package.delete('/:id', checkLoggedIn, checkOwnPost, packageCtrl.remove);
package.patch(
  '/:id',
  checkLoggedIn,
  checkOwnPost,
  updateValidation,
  packageCtrl.update,
);

packages.use('/:id', validationId, validationPost(Package), package.routes());

module.exports = packages;
