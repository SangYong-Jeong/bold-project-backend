const Character = require('../../../models/design/character');
const { relPath } = require('../../../lib/util');

// POST /api/design/character - CREATE
exports.write = async (ctx) => {
  console.log(ctx.request.body);
  console.log(ctx.request.files);
  const { title, content, rep } = ctx.request.body;
  const imgs = ctx.request.files.map((file) => ({
    originalName: file.originalname,
    src: relPath(file.filename),
  }));
  // const imgs = [
  //   { src: 'hi', rep: true },
  //   { src: 'hi', rep: true },
  // ];
  const character = new Character({
    title,
    content,
    imgs,
    user: ctx.state.user,
  });
  try {
    await character.save();
    ctx.body = character;
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/character - READ
// GET /api/design/character?rep=&page=
exports.list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  try {
    const characters = await Character.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    /* rep가 true인 img들을 갖고 있는 배열 리턴 */
    // const [posts] = characters.map((v) => v.imgs);
    // const repPosts = posts.filter((v) => v.rep);

    const charactersCounter = await Character.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(charactersCounter / 10));
    ctx.body = characters; // 추후에 대표이미지 보낼때 추가할 부분
  } catch (err) {
    ctx.throw(500, err);
  }
};

// GET /api/design/character/:id - READ
exports.read = async (ctx) => {
  ctx.body = ctx.state.post;
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
