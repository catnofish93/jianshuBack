const Controller = require('../core/baseController');
const { Op } = require('sequelize');
class Article extends Controller {
  async getArticleList() {
    const ctx = this.ctx;
    try {
      if (ctx.request.body.search) {
        await this.ctx.model.transaction(async t => {
          const res = await ctx.model.Search.findAll({
            where: {
              name: ctx.request.body.search,
            },
          });
          if (res.length === 0) {
            await ctx.model.Search.create({
              name: ctx.request.body.search,
              search_num: 1,
            }, { transaction: t });
          } else {
            await ctx.model.Search.update({
              search_num: res[0].search_num + 1,
            }, {
              where: {
                name: ctx.request.body.search,
              },
            }, { transaction: t });
          }
        });
      }
      if (ctx.request.body.search) {
        const res = await ctx.model.Article.findAll({
          limit: 10,
          where: {
            content: {
              [Op.like]: `%${ctx.request.body.search}%`,
            },
          },
        });
        ctx.body = this.success(res);
      } else {
        const res = await ctx.model.Article.findAll({
          limit: 10
        });
        console.log(res)
        const { count } = await ctx.model.Article.findAndCountAll()
        ctx.body = this.success(this.page(res, count, 10, 1));
      }
    } catch (e) {
      ctx.body = this.fail('查询文章列表失败');
    }
  }
  async addArtile() {
    const ctx = this.ctx;
    const startIndex = ctx.request.body.content.indexOf('<p>');
    const endIndex = ctx.request.body.content.indexOf('</p>');
    const discription1 = ctx.request.body.content.substring(startIndex + 3, endIndex)
    try {
      const res = await ctx.model.Article.create({
        title: ctx.request.body.title,
        content: ctx.request.body.content,
        authorName: ctx.request.body.authorName,
        authorId: ctx.request.body.authorId,
        discription: discription1
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
  // async clickZan() {
  //   const ctx = this.ctx;
  //   try {
  //   } catch (e) {
  //     ctx.body = this.fail('点赞失败');
  //   }
  // }
  // async comment() {
  //   const ctx = this.ctx
  //   try {
  //   } catch (e) {
  //     ctx.body = this.fail('评论失败');
  //   }
  // }
}

module.exports = Article;
