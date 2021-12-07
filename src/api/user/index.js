const Router = require('koa-router');
const userCtrl = require('./user.ctrl');

const user = new Router();

user.post('/login', userCtrl.login);

user.post('/logout', userCtrl.logout);

user.post('/register', userCtrl.register);

user.get('/check', userCtrl.check);

module.exports = user;
