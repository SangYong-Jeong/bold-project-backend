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
// GET /api/design/illustration?rep=&page=
exports.list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  try {
    const illustrations = await Illustration.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    /* rep가 true인 img들을 갖고 있는 배열 리턴 */
    // const [posts] = illustrations.map((v) => v.imgs);
    // const repPosts = posts.filter((v) => v.rep);

    const illustrationsCounter = await illustrations.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(illustrationsCounter / 10));
    ctx.body = illustrations;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/illustration/:id - READ
exports.read = async (ctx) => {
  ctx.body = ctx.state.post;
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
