const Illustration = require('../../../models/design/character');

// POST /api/design/illustration - CREATE
exports.write = async (ctx) => {
  const { title, content, imgs, publishedDate } = ctx.request.body;
  const illustration = new Illustration({
    title,
    content,
    imgs,
    publishedDate,
  });
  try {
    await illustration.save();
    ctx.body = illustration;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/illustration - READ
exports.list = async (ctx) => {
  try {
    const illustrations = await Illustration.find().exec();
    ctx.body = illustrations;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/illustration/:id - READ
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const illustration = await Illustration.findById(id).exec();
    if (!illustration) {
      ctx.status = 404;
      return;
    }
    ctx.body = illustration;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// DELETE /api/design/illustration/:id - REMOVE
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Illustration.findByIdAndDelete(id).exec();
    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// PATCH /api/design/illustration/:id - UPDATE
exports.update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const illustration = await Illustration.findByIdAndUpdate(
      id,
      ctx.request.body,
      {
        new: true, // new option이 true이면 업데이트 된 데이터 반환
      },
    ).exec();
    if (!illustration) {
      ctx.status = 404;
      return;
    }
    ctx.body = illustration;
  } catch (err) {
    ctx.throw(500, err);
  }
};
