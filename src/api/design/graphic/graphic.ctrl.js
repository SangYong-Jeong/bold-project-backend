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
// GET /api/design/graphic?rep=&page=
exports.list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  try {
    const graphics = await Graphic.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    /* rep가 true인 img들을 갖고 있는 배열 리턴 */
    // const [posts] = graphics.map((v) => v.imgs);
    // const repPosts = posts.filter((v) => v.rep);

    const graphicsCounter = await Graphic.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(graphicsCounter / 10));
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
