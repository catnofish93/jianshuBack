module.exports = () => {
  return async function response(ctx, next) {
    await next();
    const body = ctx.body;
    ctx.body = {
      success: Object.keys(body).length > 0,
      data: body,
      code: 10000,
    };
  };
};
