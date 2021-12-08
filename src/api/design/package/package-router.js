const Router = require('koa-router');
const packages = new Router();
const packageCtrl = require('./package.ctrl');
const {
  validationDesign,
  JoiWriteMiddleware,
  JoiUpdateMiddleware,
  checkLoggedIn,
  validationPost,
  checkOwnPost,
} = require('../../../middlewares');
const Package = require('../../../models/design/package');

packages.get('/', packageCtrl.list);
packages.post('/', checkLoggedIn, JoiWriteMiddleware, packageCtrl.write);

const package = new Router();

package.get('/:id', packageCtrl.read);
package.delete('/:id', checkLoggedIn, checkOwnPost, packageCtrl.remove);
package.patch(
  '/:id',
  checkLoggedIn,
  checkOwnPost,
  JoiUpdateMiddleware,
  packageCtrl.update,
);

packages.use(
  '/:id',
  validationDesign,
  validationPost(Package),
  package.routes(),
);

module.exports = packages;
