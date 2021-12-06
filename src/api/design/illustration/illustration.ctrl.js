let illustrationId = 1;

const illustrations = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  illustrationId += 1;
  const illustration = { id: illustrationId, title, body };
  illustrations.push(illustration);
  ctx.body = illustration;
};

exports.list = (ctx) => {
  ctx.body = illustrations;
};

exports.read = (ctx) => {
  const { id } = ctx.params;
  const illustration = illustrations.find(
    (illustration) => illustration.id == id,
  );
  if (!illustration) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = illustration;
};

exports.remove = (ctx) => {};

exports.replace = (ctx) => {};

exports.update = (ctx) => {};
