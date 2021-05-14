module.exports = app => {
  return async function auth(ctx, next) {
    const token = ctx.headers.authorization ? ctx.headers.authorization : '';
    try {
      // 解码token
      const decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
      await next();
      console.log(decode);
    } catch (error) {
      ctx.status = 401;
      ctx.body = {
        code: 5000,
        message: 'token失效或解析错误',
        success: false,
      };
      return;
    }
  };
};
