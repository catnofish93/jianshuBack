const Controller = require('../core/baseController');

class User extends Controller {
  async getUserIntroduce() {
    try {
      const ctx = this.ctx;
      const res = ctx.model.User.findOne({
        attributes: ['introduction']
      },{
        where: {
          id: ctx.request.query.id
        }
      });
      this.success(res);
    } catch (e) {
      this.fail(e);
    }
  }
  async getUserInfo() {
    try {
      const ctx = this.ctx;
      const res = ctx.model.User.findOne({
        where: {
          id: ctx.request.query.id
        }
      });
      this.success(res);
    } catch (e) {
      this.fail(e);
    }
  }
  async setUserIntroduce() {
    try {
      const ctx = this.ctx;
      const res = ctx.model.User.update({ introduction: ctx.request.body.introduction }, {
        where: {
          id: ctx.request.body.id,
        },
      });
      this.success();
    } catch (e) {
      this.fail(e);
    }
  }
}
module.exports = User;
