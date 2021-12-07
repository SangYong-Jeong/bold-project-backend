const Router = require('koa-router');
const characters = new Router();
const characterCtrl = require('./character.ctrl');
const validationId = require('../../../middlewares/validation-design');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');
const checkLoggedIn = require('../../../middlewares/checkLoggedIn');

characters.get('/', characterCtrl.list);
characters.post('/', checkLoggedIn, writeValidation, characterCtrl.write);

const character = new Router();
character.get('/', characterCtrl.read);
character.delete('/', checkLoggedIn, characterCtrl.remove);
character.patch('/', checkLoggedIn, updateValidation, characterCtrl.update);

characters.use('/:id', validationId, character.routes());

module.exports = characters;
