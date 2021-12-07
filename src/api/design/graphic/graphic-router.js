const Router = require('koa-router');
const graphics = new Router();
const graphicCtrl = require('./graphic.ctrl');
const validationId = require('../../../middlewares/validation-design');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');
const checkLoggedIn = require('../../../middlewares/checkLoggedIn');

graphics.get('/', graphicCtrl.list);
graphics.post('/', checkLoggedIn, writeValidation, graphicCtrl.write);

const graphic = new Router();

graphic.get('/', graphicCtrl.read);
graphic.delete('/', checkLoggedIn, graphicCtrl.remove);
graphic.patch('/', checkLoggedIn, updateValidation, graphicCtrl.update);

graphics.use('/:id', validationId, graphic.routes());

module.exports = graphics;
