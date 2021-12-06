const Character = require('../../../models/design/character');
const Joi = require('joi');

// POST /api/design/character - CREATE
exports.write = async (ctx) => {
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
  console.log(result);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const { title, content, imgs, publishedDate } = ctx.request.body;
  const character = new Character({
    title,
    content,
    imgs,
    publishedDate,
  });
  try {
    await character.save();
    ctx.body = character;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/character - READ
exports.list = async (ctx) => {
  try {
    const characters = await Character.find().exec();
    ctx.body = characters;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/character/:id - READ
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const character = await Character.findById(id).exec();
    if (!character) {
      ctx.status = 404;
      return;
    }
    ctx.body = character;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// DELETE /api/design/character/:id - REMOVE
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Character.findByIdAndDelete(id).exec();
    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// PATCH /api/design/character/:id - UPDATE
exports.update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const character = await Character.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // new option이 true이면 업데이트 된 데이터 반환
    }).exec();
    if (!character) {
      ctx.status = 404;
      return;
    }
    ctx.body = character;
  } catch (err) {
    ctx.throw(500, err);
  }
};
