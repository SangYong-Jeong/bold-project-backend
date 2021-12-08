const validationPost = (Model) => async (ctx, next) => {
  const { id } = ctx.params;
  try {
    const post = await Model.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (err) {
    ctx.throw(500, err);
  }
};

module.exports = { validationPost };
