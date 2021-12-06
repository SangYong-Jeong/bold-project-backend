const mongoose = require('mongoose');

const { isValidObjectId } = mongoose;

module.exports = async (ctx, next) => {
  const { id } = ctx.params;
  if (!isValidObjectId(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

// 다음 작업이 비동기라면 이전 미들웨어에서 promise값을 리턴해야한다. 이후 다음 미들웨어가 끝나면 Promise.resolve 되어서 다음 미들웨어 처리를 포함해 응답을 할 수 있게 된다.

// 다음 미들웨어가 동기적이라면 다음 미들웨어를 마친후 then절로 이후 작업 처리 가능 return or await 안 써도 됨

// 다음 미들웨어가 비동기적이라면 (ex) - async / await 즉, Promise를 반환한다면 다음 미들웨어의 작업이 끝나기전에 해당 미들웨어에서 작업 처리
