require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongooseInit = require('./modules/mongo-init');
const { PORT, MONGO_URI } = process.env;
const api = require('./api');
const { jwtMiddleware } = require('./middlewares');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

/* mongoose init */
mongooseInit(MONGO_URI);

/* router */
router.use('/api', api.routes());

/* middleware */
app.use(cors({ credentials: true }));
app.use(bodyParser());
app.use(jwtMiddleware);

/* router 적용 -> 이 부분을 거치지 않으면 위에 router가 작동하지 않는다. express와 다르게 koa 에서는 이부분이 라우터로 들어가는 부분이라고 보면된다. 따라서 위의 미들웨어들을 다 거치고 나서 라우터로 들어가게 된다. */
app.use(router.routes()).use(router.allowedMethods());

/* server init */
const port = PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening to port %d`, port);
});
