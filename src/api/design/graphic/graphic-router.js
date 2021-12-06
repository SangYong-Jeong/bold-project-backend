const Router = require('koa-router');
const graphic = new Router();
const graphicCtrl = require('./graphic-ctrl');

graphic.get('/', graphicCtrl.list);
graphic.post('/', graphicCtrl.write);
graphic.get('/:id', graphicCtrl.read);
graphic.delete('/:id', graphicCtrl.remove);
graphic.put('/:id', graphicCtrl.replace);
graphic.patch('/:id', graphicCtrl.update);

module.exports = graphic;
