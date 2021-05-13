const Controller = require('../core/baseController');

class Article extends Controller {
  async getArticleList() {
    const ctx = this.ctx;
    ctx.body = this.success({
      a: '1111111'
    });
  }
}

module.exports = Article;
