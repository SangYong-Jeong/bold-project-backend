let graphicId = 1;

const graphics = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

// POST /api/design/graphic
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  graphicId += 1;
  const graphic = { id: graphicId, title, body };
  graphics.push(graphic);
  ctx.body = graphic;
};

// GET /api/design/graphic
exports.list = (ctx) => {
  ctx.body = graphics;
};

// GET /api/design/graphic/:id
exports.read = (ctx) => {
  const { id } = ctx.params;
  const graphic = graphics.find((graphic) => graphic.id == id);
  if (!graphic) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = graphic;
};

// DELETE /api/design/graphic/:id
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = graphics.findIndex((graphic) => graphic.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  graphics.splice(index, 1);
  ctx.status = 204;
};

// PUT /api/design/graphic/:id
exports.replace = (ctx) => {
  const { id } = ctx.params;
  const index = graphics.findIndex((graphic) => graphic.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  graphics[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = graphics[index];
};

// PATCH /api/design/graphic/:id
exports.update = (ctx) => {
  const { id } = ctx.params;
  const index = graphics.findIndex((graphic) => graphic.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  graphics[index] = {
    ...graphics[index],
    ...ctx.request.body,
  };
  ctx.body = graphics[index];
};
