const Router = require('koa-router');
const graphics = new Router();
const graphicCtrl = require('./graphic.ctrl');
const validationId = require('../../../middlewares/validation');

graphics.get('/', graphicCtrl.list);
graphics.post('/', graphicCtrl.write);

const graphic = new Router();

graphic.get('/', graphicCtrl.read);
graphic.delete('/', graphicCtrl.remove);
graphic.patch('/', graphicCtrl.update);

graphics.use('/:id', validationId, graphic.routes());

module.exports = graphics;
