let packageId = 1;

const packages = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

// POST /api/design/package
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  packageId += 1;
  const package = { id: packageId, title, body };
  packages.push(package);
  ctx.body = package;
};

// GET /api/design/package
exports.list = (ctx) => {
  ctx.body = packages;
};

// GET /api/design/package/:id
exports.read = (ctx) => {
  const { id } = ctx.params;
  const package = packages.find((package) => package.id == id);
  if (!package) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = package;
};

// DELETE /api/design/package/:id
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = packages.findIndex((package) => package.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  packages.splice(index, 1);
  ctx.status = 204;
};

// PUT /api/design/package/:id
exports.replace = (ctx) => {
  const { id } = ctx.params;
  const index = packages.findIndex((package) => package.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  packages[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = packages[index];
};

// PATCH /api/design/package/:id
exports.update = (ctx) => {
  const { id } = ctx.params;
  const index = packages.findIndex((package) => package.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  packages[index] = {
    ...packages[index],
    ...ctx.request.body,
  };
  ctx.body = packages[index];
};
