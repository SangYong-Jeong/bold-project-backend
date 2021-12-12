const Joi = require('joi');
const User = require('../../models/user/user');

/* 
  POST /api/user/register { userid: 'mmaduuu', password: '123123'  }
*/
exports.register = async (ctx) => {
  const schema = Joi.object().keys({
    userid: Joi.string().alphanum().min(6).max(20).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const { userid, password } = ctx.request.body;
  try {
    const exists = await User.findByUserId(userid);
    if (exists) {
      ctx.status = 409;
      return;
    }
    const user = new User({
      userid,
    });
    await user.setPassword(password);
    await user.save();

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (err) {
    ctx.throw(500, err);
  }
};

/* 
  POST /api/user/login {userid: 'mmaduuu', password: '123123'}
*/
exports.login = async (ctx) => {
  const { userid, password } = ctx.request.body;
  if (!userid || !password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByUserId(userid);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (err) {
    ctx.throw(500, err);
  }
};

exports.logout = async (ctx) => {
  console.log('logout');
  ctx.cookies.set('access_token');
  ctx.status = 204;
};

/* 
  GET /api/user/check
*/
exports.check = async (ctx) => {
  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = user;
};
