require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongooseInit = require('./modules/mongo-init');
const { PORT, MONGO_URI } = process.env;
const api = require('./api');

const app = new Koa();
const router = new Router();

/* mongoose init */
mongooseInit(MONGO_URI);

/* router */
router.use('/api', api.routes());

/* middleware */

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

/* server init */
const port = PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening to port %d`, port);
});
