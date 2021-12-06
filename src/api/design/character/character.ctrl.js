const Character = require('../../../models/design/character');

// POST /api/design/character
exports.write = async (ctx) => {
  const { number, title, content, imgs, publishedDate } = ctx.request.body;
  const character = new Character({
    number,
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

// GET /api/design/character
exports.list = (ctx) => {};

// GET /api/design/character/:id
exports.read = (ctx) => {};

// DELETE /api/design/character/:id
exports.remove = (ctx) => {};

// PATCH /api/design/character/:id
exports.update = (ctx) => {};
