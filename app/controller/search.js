const Controller = require('../core/baseController');
/**
 * @Controller 关键字
 */
class LoginController extends Controller {
  /**
   * @Router POST /getSearchList
   * @description 根据关键字查询
   * @return {Promise<void>}
   */
  async list() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    try {
      const res = await ctx.model.Search.findAll({
        attributes: [ 'name' ],
      }, {
        limit: 10,
        order: ['search_num', 'DESC'],
      });
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail(e);
    }
  }
}
module.exports = LoginController;
