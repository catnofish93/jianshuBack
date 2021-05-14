const Service = require('egg').Service;

class Article extends Service {
  async getArticleList() {

  }
  async addArtile() {
    const ctx = this.ctx;
    console.log(ctx.request.body);
  }
}

module.exports = Article;
