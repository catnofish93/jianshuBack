const Controller = require('../core/baseController');
class Article extends Controller {
  async getArticleList() {
    const ctx = this.ctx;
    try {
      const res = await ctx.model.Article.findAll({
        limit: 10,
      });
      ctx.body = this.success(res);
    } catch (e) {
      console.log(e);
      ctx.body = this.fail('查询文章列表失败');
    }
  }
  async addArtile() {
    const ctx = this.ctx;
    try {
      const res = await ctx.model.Article.create({
        title: ctx.request.body.title,
        content: ctx.request.body.content,
        authorName: ctx.request.body.authorName,
        authorId: ctx.request.body.authorId,
        discription: ctx.request.body.discription
      });
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail('新增文章失败');
    }
  }
  async articleDetail() {
    const ctx = this.ctx;
    try {
      const res = await ctx.model.Article.findOne({
        where: {
          id: ctx.request.body.id,
        },
      });
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail('查看文章详情失败');
    }
  }
}

module.exports = Article;
