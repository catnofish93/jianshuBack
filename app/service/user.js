// eslint-disable-next-line strict
const Service = require('egg').Service;
class UserService extends Service {
  async login(password) {
    console.log(password.phone)
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('user', { password: password.phone });
    return user;
  }
  async register(params) {
    console.log(params)
    return params;
  }
}
module.exports = UserService;
