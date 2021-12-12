const Router = require('koa-router');
const userCtrl = require('./user.ctrl');
const { checkLoggedIn } = require('../../middlewares');
const user = new Router();

user.post('/login', userCtrl.login);

user.post('/logout', checkLoggedIn, userCtrl.logout);

user.post('/register', checkLoggedIn, userCtrl.register);

user.get('/check', userCtrl.check);

module.exports = user;
