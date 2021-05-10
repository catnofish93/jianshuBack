const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    console.log(this.app.model.query)
    const ctx = this.ctx;
    const body = ctx.request.body;
    const res = await ctx.model.User.findOne({
      where: {
        ...body,
      },
    });
    if (!body.phone) {
      ctx.body = res ? res : {};
    } else if (!body.password) {
      ctx.body = res ? res : {};
    }
    ctx.body = res ? res : {};
  }
  async register() {
    const ctx = this.ctx;
  }
}
module.exports = LoginController;
