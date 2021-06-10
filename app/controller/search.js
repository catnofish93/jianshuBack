const Controller = require('../core/baseController');

class LoginController extends Controller {
  async list() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    try {
      const res = await ctx.model.Search.findAll({
        attributes: [ 'name' ],
      }, {
        limit: 10,
        order: ctx.model.col('search_num'),
      });
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail(e);
    }
  }
}
module.exports = LoginController;
