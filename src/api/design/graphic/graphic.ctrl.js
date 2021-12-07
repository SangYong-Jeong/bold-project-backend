const Graphic = require('../../../models/design/graphic');

// POST /api/design/graphic - CREATE
exports.write = async (ctx) => {
  const { title, content, imgs, publishedDate } = ctx.request.body;
  const graphic = new Graphic({
    title,
    content,
    imgs,
    publishedDate,
  });
  try {
    await graphic.save();
    ctx.body = graphic;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/graphic - READ
exports.list = async (ctx) => {
  try {
    const graphics = await Graphic.find().exec();
    ctx.body = graphics;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/graphic/:id - READ
exports.read = async (ctx) => {
  ctx.body = ctx.state.post;
};

// DELETE /api/design/graphic/:id - REMOVE
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Graphic.findByIdAndDelete(id).exec();
    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// PATCH /api/design/graphic/:id - UPDATE
exports.update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const graphic = await Graphic.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // new option이 true이면 업데이트 된 데이터 반환
    }).exec();
    if (!graphic) {
      ctx.status = 404;
      return;
    }
    ctx.body = graphic;
  } catch (err) {
    ctx.throw(500, err);
  }
};
