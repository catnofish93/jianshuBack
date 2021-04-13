module.exports = () => {
  return async function response(ctx, next) {
    await next();
    let body = ctx.body;
    ctx.body = {
      success: true,
      data: body,
      code: 10000
    }
  };
};