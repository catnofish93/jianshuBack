// eslint-disable-next-line strict
const Service = require('egg').Service;
class UserService extends Service {
  async login() {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const ctx = this.ctx;
    const body = ctx.request.body;
    if (!body.phone) {
      throw '请输入手机号';
    } else if (!body.password) {
      throw '请输入密码';
    }
    const res = await ctx.model.User.findOne({
      where: {
        ...body,
      },
    });
    if (res) {
      const token = this.app.jwt.sign({
        ...body,
      }, this.app.config.jwt.secret);
      return {
        token,
      };
    } else {
      throw '该账户不存在';
    }
  }
  async register(params) {
    const ctx = this.ctx;
    if (!params.phone) {
      throw '请输入手机号'
    } else if (!params.password) {
      throw '请输入密码'
    } else if (!params.name) {
      throw '请输入昵称'
    }
    const users = await ctx.model.User.findAll({
      where: {
        phone: params.phone,
      },
    });
    if (users.length > 0) {
      throw '该账号已注册'
    } else {
      const res = await ctx.model.User.create({
        name: params.name,
        phone: params.phone,
        password: params.password,
      });
      return res
    }
  }
}
module.exports = UserService;
