const Controller = require('../core/baseController');
class User extends Controller {
  async getUserIntroduce() {
    try {
      const ctx = this.ctx;
      const res = ctx.model.UserInfo.findOne({
        attributes: [ 'introduce' ],
      }, {
        where: {
          userId: ctx.request.query.id,
        },
      });
      this.success(res);
    } catch (e) {
      this.fail(e);
    }
  }
  async getUserInfo() {
    try {
      const ctx = this.ctx;
      const res = ctx.model.UserInfo.findOne({
        where: {
          userId: ctx.request.query.id,
        },
      });
      this.success(res);
    } catch (e) {
      this.fail(e);
    }
  }
  async setUserIntroduce() {
    try {
      const ctx = this.ctx;
      const res = ctx.model.UserInfo.update({ introduce: ctx.request.body.introduce }, {
        where: {
          userId: ctx.request.body.id,
        },
      });
      this.success(res);
    } catch (e) {
      this.fail(e);
    }
  }
}
module.exports = User;
