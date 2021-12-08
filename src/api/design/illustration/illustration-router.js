const Router = require('koa-router');
const illustrations = new Router();
const illustrationCtrl = require('./illustration.ctrl');
const {
  validationDesign,
  JoiWriteMiddleware,
  JoiUpdateMiddleware,
  checkLoggedIn,
  validationPost,
  checkOwnPost,
} = require('../../../middlewares');
const Illustration = require('../../../models/design/illustration');

illustrations.get('/', illustrationCtrl.list);
illustrations.post(
  '/',
  checkLoggedIn,
  JoiWriteMiddleware,
  illustrationCtrl.write,
);

const illustration = new Router();

illustration.get('/:id', illustrationCtrl.read);
illustration.delete(
  '/:id',
  checkLoggedIn,
  checkOwnPost,
  illustrationCtrl.remove,
);
illustration.patch(
  '/:id',
  checkLoggedIn,
  checkOwnPost,
  JoiUpdateMiddleware,
  illustrationCtrl.update,
);

illustrations.use(
  '/:id',
  validationDesign,
  validationPost(Illustration),
  illustration.routes(),
);

module.exports = illustrations;
