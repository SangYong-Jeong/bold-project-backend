const Router = require('koa-router');
const characters = new Router();
const characterCtrl = require('./character.ctrl');
const validationId = require('../../../middlewares/validation');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');

characters.get('/', characterCtrl.list);
characters.post('/', writeValidation, characterCtrl.write);

const character = new Router();
character.get('/', characterCtrl.read);
character.delete('/', characterCtrl.remove);
character.patch('/', updateValidation, characterCtrl.update);

characters.use('/:id', validationId, character.routes());

module.exports = characters;
