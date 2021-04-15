module.exports = () => {
  return async function response(ctx, next) {
    await next();
    let body = ctx.body;
    ctx.body = {
      success: Object.keys(body).length > 0 ?true:false,
      data: body,
      code: 10000
    }
  };
};