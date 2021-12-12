const Router = require('koa-router');
const characters = new Router();
const characterCtrl = require('./character.ctrl');
const {
  validationDesign,
  JoiWriteMiddleware,
  JoiUpdateMiddleware,
  checkLoggedIn,
  validationPost,
  checkOwnPost,
} = require('../../../middlewares');
const Character = require('../../../models/design/character');
const upload = require('../../../middlewares/multer-mw');

characters.get('/', characterCtrl.list);
characters.post('/', checkLoggedIn, upload.array('imgs'), characterCtrl.write);

const character = new Router();
character.get('/', characterCtrl.read);
character.delete('/', checkLoggedIn, checkOwnPost, characterCtrl.remove);
character.patch(
  '/',
  checkLoggedIn,
  checkOwnPost,
  JoiUpdateMiddleware,
  characterCtrl.update,
);

characters.use(
  '/:id',
  validationDesign,
  validationPost(Character),
  character.routes(),
);

module.exports = characters;
