let characterId = 1;

const characters = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

// POST /api/design/character
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  characterId += 1;
  const character = { id: characterId, title, body };
  characters.push(character);
  ctx.body = character;
};

// GET /api/design/character
exports.list = (ctx) => {
  ctx.body = characters;
};

// GET /api/design/character/:id
exports.read = (ctx) => {
  const { id } = ctx.params;
  const character = characters.find((character) => character.id == id);
  if (!character) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = character;
};

// DELETE /api/design/character/:id
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = characters.findIndex(
    (character) => character.id.toString() === id,
  );
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  characters.splice(index, 1);
  ctx.status = 204;
};

// PUT /api/design/character/:id
exports.replace = (ctx) => {
  const { id } = ctx.params;
  const index = characters.findIndex(
    (character) => character.id.toString() === id,
  );
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  characters[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = characters[index];
};

// PATCH /api/design/character/:id
exports.update = (ctx) => {
  const { id } = ctx.params;
  const index = characters.findIndex(
    (character) => character.id.toString() === id,
  );
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 일러스트레이션이 존재하지 않습니다.',
    };
    return;
  }
  characters[index] = {
    ...characters[index],
    ...ctx.request.body,
  };
  ctx.body = characters[index];
};
