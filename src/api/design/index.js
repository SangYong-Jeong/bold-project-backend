const Router = require('koa-router');
const design = new Router();
const package = require('./package/package-router');
const illustration = require('./illustration/illustration-router');
const graphic = require('./graphic/graphic-router');
const characters = require('./character/character-router');

design.use('/package', package.routes());

design.use('/graphic', graphic.routes());

design.use('/illustration', illustration.routes());

design.use('/character', characters.routes());

module.exports = design;
