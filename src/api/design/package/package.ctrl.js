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
// GET /api/design/package?rep=&page=
exports.list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const packages = await Package.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    /* rep가 true인 img들을 갖고 있는 배열 리턴 */
    // const [posts] = packages.map((v) => v.imgs);
    // const repPosts = posts.filter((v) => v.rep);

    const packagesCounter = await Package.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(packagesCounter / 10));
    ctx.body = packages;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/package/:id - READ
exports.read = async (ctx) => {
  ctx.body = ctx.state.post;
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
