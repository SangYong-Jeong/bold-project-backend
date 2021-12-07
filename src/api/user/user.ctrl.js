const Joi = require('joi');
const User = require('../../models/user/user');

/* 
  POST /api/auth/register { userId: 'mmaduuu', password: '123123'  }
*/
exports.register = async (ctx) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
};

exports.login = async (ctx) => {};

exports.logout = async (ctx) => {};

exports.check = async (ctx) => {};
