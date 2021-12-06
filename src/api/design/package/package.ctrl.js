const Package = require('../../../models/design/character');

// POST /api/design/character - CREATE
exports.write = async (ctx) => {
  const { title, content, imgs, publishedDate } = ctx.request.body;
  const package = new Package({
    title,
    content,
    imgs,
    publishedDate,
  });
  try {
    await package.save();
    ctx.body = package;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/package - READ
exports.list = async (ctx) => {
  try {
    const packages = await Package.find().exec();
    ctx.body = packages;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/package/:id - READ
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const package = await Package.findById(id).exec();
    if (!package) {
      ctx.status = 404;
      return;
    }
    ctx.body = package;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// DELETE /api/design/package/:id - REMOVE
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Package.findByIdAndDelete(id).exec();
    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// PATCH /api/design/package/:id - UPDATE
exports.update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const package = await Package.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // new option이 true이면 업데이트 된 데이터 반환
    }).exec();
    if (!package) {
      ctx.status = 404;
      return;
    }
    ctx.body = package;
  } catch (err) {
    ctx.throw(500, err);
  }
};
