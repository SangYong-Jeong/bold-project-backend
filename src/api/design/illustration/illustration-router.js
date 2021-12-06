const Router = require('koa-router');
const illustration = new Router();
const illustrationCtrl = require('./illustration.ctrl');

illustration.get('/', illustrationCtrl.list);
illustration.post('/', illustrationCtrl.write);
illustration.get('/:id', illustrationCtrl.read);
illustration.delete('/:id', illustrationCtrl.remove);
illustration.put('/:id', illustrationCtrl.replace);
illustration.patch('/:id', illustrationCtrl.update);

module.exports = illustration;
