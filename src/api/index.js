const Router = require('koa-router');
const api = new Router();

const user = require('./user');
const design = require('./design');

api.use('/user', user.routes());

api.use('/design', design.routes());

module.exports = api;
