const Joi = require('joi');

const JoiWriteMiddleware = (_validation) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    imgs: Joi.array().items(
      Joi.object().keys({
        originalName: Joi.string(),
        src: Joi.string(),
        rep: Joi.boolean(),
      }),
    ),
  });
  return schema.validate(_validation);
};

module.exports = { JoiWriteMiddleware };
