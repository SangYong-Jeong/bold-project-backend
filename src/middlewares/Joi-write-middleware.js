const Joi = require('joi');

module.exports = (ctx, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
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
