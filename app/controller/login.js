const Controller = require('../core/baseController');
/**
 * @Controller 登录
 */
class LoginController extends Controller {
  /**
   * @Router POST /login
   * @description 登录
   * @return {Promise<void>}
   */
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
  /**
   * @Router POST /register
   * @description 注册
   * @return {Promise<void>}
   */
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
