const Controller = require('../core/baseController');

class LoginController extends Controller {
  async login() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    try {
      const res = await ctx.service.user.login(body);
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail(e);
    }
  }
  async register() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    try {
      const res = await ctx.service.user.register(body);
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail(e);
    }
  }
}
module.exports = LoginController;
