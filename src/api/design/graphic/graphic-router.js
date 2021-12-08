const Router = require('koa-router');
const graphics = new Router();
const graphicCtrl = require('./graphic.ctrl');
const {
  validationDesign,
  JoiWriteMiddleware,
  JoiUpdateMiddleware,
  checkLoggedIn,
  validationPost,
  checkOwnPost,
} = require('../../../middlewares');
const Graphic = require('../../../models/design/graphic');

graphics.get('/', graphicCtrl.list);
graphics.post('/', checkLoggedIn, JoiWriteMiddleware, graphicCtrl.write);

const graphic = new Router();

graphic.get('/', graphicCtrl.read);
graphic.delete('/', checkLoggedIn, checkOwnPost, graphicCtrl.remove);
graphic.patch(
  '/',
  checkLoggedIn,
  checkOwnPost,
  JoiUpdateMiddleware,
  graphicCtrl.update,
);

graphics.use(
  '/:id',
  validationDesign,
  validationPost(Graphic),
  graphic.routes(),
);

module.exports = graphics;
