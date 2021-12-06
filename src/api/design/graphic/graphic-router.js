const Router = require('koa-router');
const graphics = new Router();
const graphicCtrl = require('./graphic.ctrl');
const validationId = require('../../../middlewares/validation');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');

graphics.get('/', graphicCtrl.list);
graphics.post('/', writeValidation, graphicCtrl.write);

const graphic = new Router();

graphic.get('/', graphicCtrl.read);
graphic.delete('/', graphicCtrl.remove);
graphic.patch('/', updateValidation, graphicCtrl.update);

graphics.use('/:id', validationId, graphic.routes());

module.exports = graphics;
