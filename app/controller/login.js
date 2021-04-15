const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const ctx = this.ctx;
    let body = ctx.request.body;
    let res = await ctx.model.User.findOne({
      where: {
        ...body
      }
    })
    if (!body.phone) {
      ctx.body = res?res:{}
    } else if (!body.password) {
      ctx.body = res?res:{}
    }
    ctx.body = res?res:{}
  }
}
module.exports = LoginController;