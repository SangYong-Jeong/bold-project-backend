const Joi = require('joi');

const JoiUpdateMiddleware = (ctx, next) => {
  const schema = Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
    imgs: Joi.array().items(
      Joi.object({
        id: Joi.number(),
        src: Joi.string(),
        rep: Joi.boolean(),
      }),
    ),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  return next();
};

module.exports = { JoiUpdateMiddleware };
