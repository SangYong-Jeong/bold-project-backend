const Router = require('koa-router');
const characters = new Router();
const characterCtrl = require('./character.ctrl');
const validationId = require('../../../middlewares/validation-design');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');
const checkLoggedIn = require('../../../middlewares/checkLoggedIn');
const validationPost = require('../../../middlewares/validation-post');
const Character = require('../../../models/design/character');
const checkOwnPost = require('../../../middlewares/checkOwnPost');

characters.get('/', characterCtrl.list);
characters.post('/', checkLoggedIn, writeValidation, characterCtrl.write);

const character = new Router();
character.get('/', characterCtrl.read);
character.delete('/', checkLoggedIn, checkOwnPost, characterCtrl.remove);
character.patch(
  '/',
  checkLoggedIn,
  checkOwnPost,
  updateValidation,
  characterCtrl.update,
);

characters.use(
  '/:id',
  validationId,
  validationPost(Character),
  character.routes(),
);

module.exports = characters;
