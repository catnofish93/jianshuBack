module.exports = (app) => {
  return async function auth(ctx, next) {
    var token = ctx.headers.authorization ? ctx.headers.authorization : '';
    try {
      // 解码token
      let decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
      await next();
      console.log(decode);
    } catch (error) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        message: 'token失效或解析错误',
        data: null,
        success: false
      }
      return;
    }
  }
}
