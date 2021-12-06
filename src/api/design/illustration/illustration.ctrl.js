let illustrationId = 1;

const illustrations = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

// POST /api/design/illustration
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  illustrationId += 1;
  const illustration = { id: illustrationId, title, body };
  illustrations.push(illustration);
  ctx.body = illustration;
};

// GET /api/design/illustration
exports.list = (ctx) => {
  ctx.body = illustrations;
};

// GET /api/design/illustration/:id
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

// DELETE /api/design/illustration/:id
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = illustrations.findIndex(
    (illustration) => illustration.id.toString() === id,
  );
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  illustrations.splice(index, 1);
  ctx.status = 204;
};

// PUT /api/design/illustration/:id
exports.replace = (ctx) => {
  const { id } = ctx.params;
  const index = illustrations.findIndex(
    (illustration) => illustration.id.toString() === id,
  );
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  illustrations[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = illustrations[index];
};

// PATCH /api/design/illustration/:id
exports.update = (ctx) => {
  const { id } = ctx.params;
  const index = illustrations.findIndex(
    (illustration) => illustration.id.toString() === id,
  );
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  illustrations[index] = {
    ...illustrations[index],
    ...ctx.request.body,
  };
  ctx.body = illustrations[index];
};
