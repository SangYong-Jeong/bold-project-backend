const Router = require('koa-router');
const illustrations = new Router();
const illustrationCtrl = require('./illustration.ctrl');
const validationId = require('../../../middlewares/validation-design');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');
const checkLoggedIn = require('../../../middlewares/checkLoggedIn');

illustrations.get('/', illustrationCtrl.list);
illustrations.post('/', checkLoggedIn, writeValidation, illustrationCtrl.write);

const illustration = new Router();

illustration.get('/:id', illustrationCtrl.read);
illustration.delete('/:id', checkLoggedIn, illustrationCtrl.remove);
illustration.patch(
  '/:id',
  checkLoggedIn,
  updateValidation,
  illustrationCtrl.update,
);

illustrations.use('/:id', validationId, illustration.routes());

module.exports = illustrations;
