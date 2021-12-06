const Router = require('koa-router');
const character = new Router();
const characterCtrl = require('./character.ctrl');

character.get('/', characterCtrl.list);
character.post('/', characterCtrl.write);
character.get('/:id', characterCtrl.read);
character.delete('/:id', characterCtrl.remove);
character.patch('/:id', characterCtrl.update);

module.exports = character;
