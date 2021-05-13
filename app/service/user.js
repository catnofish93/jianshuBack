// eslint-disable-next-line strict
const Service = require('egg').Service;
class UserService extends Service {
  async login() {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const ctx = this.ctx;
    const body = ctx.request.body;
    const res = await ctx.model.User.findOne({
      where: {
        ...body,
      },
    });
    if (res) {
      return res
    } else {
      throw '该账户不存在'
    }
  }
  async register(params) {
    const ctx = this.ctx;
    const users = await ctx.model.User.findAll({
      where: {
        ...params,
      },
    });
    if (users.length > 0) {
      throw '该账号已注册'
    } else {
      const res = await ctx.model.User.create({
        name: 'test',
        phone: params.phone,
        password: params.password,
      });
      return res
    }
  }
}
module.exports = UserService;
