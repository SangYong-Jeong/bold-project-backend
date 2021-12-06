const Router = require('koa-router');
const characters = new Router();
const characterCtrl = require('./character.ctrl');
const validationId = require('../../../middlewares/validation');

characters.get('/', characterCtrl.list);
characters.post('/', characterCtrl.write);

const character = new Router();
character.get('/', characterCtrl.read);
character.delete('/', characterCtrl.remove);
character.patch('/', characterCtrl.update);

characters.use('/:id', validationId, character.routes());

module.exports = characters;
