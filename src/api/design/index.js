const Router = require('koa-router');
const design = new Router();
const packages = require('./package/package-router');
const illustrations = require('./illustration/illustration-router');
const graphics = require('./graphic/graphic-router');
const characters = require('./character/character-router');

design.use('/package', packages.routes());

design.use('/graphic', graphics.routes());

design.use('/illustration', illustrations.routes());

design.use('/character', characters.routes());

module.exports = design;
