const Router = require('koa-router');
const graphics = new Router();
const graphicCtrl = require('./graphic.ctrl');
const validationId = require('../../../middlewares/validation-design');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');
const checkLoggedIn = require('../../../middlewares/checkLoggedIn');
const validationPost = require('../../../middlewares/validation-post');
const Graphic = require('../../../models/design/graphic');
const checkOwnPost = require('../../../middlewares/checkOwnPost');

graphics.get('/', graphicCtrl.list);
graphics.post('/', checkLoggedIn, writeValidation, graphicCtrl.write);

const graphic = new Router();

graphic.get('/', graphicCtrl.read);
graphic.delete('/', checkLoggedIn, checkOwnPost, graphicCtrl.remove);
graphic.patch(
  '/',
  checkLoggedIn,
  checkOwnPost,
  updateValidation,
  graphicCtrl.update,
);

graphics.use('/:id', validationId, validationPost(Graphic), graphic.routes());

module.exports = graphics;
