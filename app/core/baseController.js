const Controller = require('egg').Controller;
class BaseController extends Controller {
  success(data) {
    return {
      success: true,
      data,
      code: 10000,
    };
  }
  fail(msg) {
    return {
      success: false,
      msg,
      code: 5000,
    };
  }
  page(data, total, pageSize, pageSum) {
    return {
      list: data,
      total,
      pageSize,
      pageSum
    }
  }
}
module.exports = BaseController;
