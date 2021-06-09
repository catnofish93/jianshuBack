const Controller = require('../core/baseController');

class LoginController extends Controller {
  async list() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    try {
      const res = await ctx.model.Search.findAll({limit: 10});
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail(e);
    }
  }
}
module.exports = LoginController;
