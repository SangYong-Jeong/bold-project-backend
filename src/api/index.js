const Router = require('koa-router');
const api = new Router();

const design = require('./design');
const user = require('./user');

api.use('/design', design.routes());
api.use('/user', user.routes());

module.exports = api;
