const Router = require('koa-router');
const illustrations = new Router();
const illustrationCtrl = require('./illustration.ctrl');
const validationId = require('../../../middlewares/validation');
const writeValidation = require('../../../middlewares/Joi-write-middleware');
const updateValidation = require('../../../middlewares/Joi-update-middleware copy');

illustrations.get('/', illustrationCtrl.list);
illustrations.post('/', writeValidation, illustrationCtrl.write);

const illustration = new Router();

illustration.get('/:id', illustrationCtrl.read);
illustration.delete('/:id', illustrationCtrl.remove);
illustration.patch('/:id', updateValidation, illustrationCtrl.update);

illustrations.use('/:id', validationId, illustration.routes());

module.exports = illustrations;
