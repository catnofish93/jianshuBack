const Controller = require('../core/baseController');
/**
 * @Controller 用户信息
 */
class User extends Controller {
  /**
   * @Router POST /userInfo/getIntroduce
   * @description 获取个人简介
   * @return {Promise<void>}
   */
  async getUserIntroduce() {
    try {
      const ctx = this.ctx;
      console.log(ctx.request.body)
      const res = await ctx.model.UserInfo.findOne({
        attributes: [ 'introduce' ],
      }, {
        where: {
          userId: ctx.request.body.id,
        },
      });
      console.log(res, this.success)
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail(e);
    }
  }
  /**
   * @Router POST /userInfo//getUserInfo
   * @description 获取用户信息
   * @return {Promise<void>}
   */
  async getUserInfo() {
    try {
      const ctx = this.ctx;
      const res = ctx.model.UserInfo.findOne({
        where: {
          userId: ctx.request.query.id,
        },
      });
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail(e);
    }
  }
  /**
   * @Router POST /userInfo/setIntroduce
   * @description 设置用户简介
   * @return {Promise<void>}
   */
  async setUserIntroduce() {
    try {
      const ctx = this.ctx;
      console.log(ctx.request.body.introduce, typeof ctx.request.body.id)
      const res = await ctx.model.UserInfo.findOne({
        where: {
          user_id: ctx.request.body.id,
        }})
      console.log(res.update)
      const res1 = await res.update({ introduce: ctx.request.body.introduce });
      ctx.body = this.success(res1);
    } catch (e) {
      ctx.body = this.fail(e);
    }
  }
}
module.exports = User;
