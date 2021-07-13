const Controller = require('../core/baseController');
const { Op } = require('sequelize');

/**
 * @Controller 文章
 */
class Article extends Controller {
  /**
   * @Router POST /articleList
   * @description 获取文章列表
   * @Request body string search 查询关键字
   * @return {Promise<void>}
   */
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
          limit: ctx.body.pageSize,
        });
        console.log(res);
        const { count } = await ctx.model.Article.findAndCountAll();
        ctx.body = this.success(this.page(res, count, 10, 1));
      }
    } catch (e) {
      ctx.body = this.fail('查询文章列表失败');
    }
  }
  /**
   * @Router POST /addArticle
   * @description 新增文章
   * @return {Promise<void>}
   */
  async addArtile() {
    const ctx = this.ctx;
    const startIndex = ctx.request.body.content.indexOf('<p>');
    const endIndex = ctx.request.body.content.indexOf('</p>');
    const discription1 = ctx.request.body.content.substring(startIndex + 3, endIndex);
    try {
      const res = await ctx.model.Article.create({
        title: ctx.request.body.title,
        content: ctx.request.body.content,
        authorName: ctx.request.body.authorName,
        authorId: ctx.request.body.authorId,
        discription: discription1,
      });
      ctx.body = this.success(res);
    } catch (e) {
      ctx.body = this.fail('新增文章失败');
    }
  }
  /**
   * @Router POST /articleDetail
   * @description 文章详情
   * @return {Promise<void>}
   */
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
  /**
   * @Router POST /clickZan
   * @description 点赞
   * @return {Promise<void>}
   */
  async clickZan() {
    const ctx = this.ctx;
    try {
      const res = await ctx.model.Zan.findOne({
        where: {
          userId: ctx.request.body.userId,
          articleId: ctx.request.body.articleId,
        },
      });
      if (res) {
        await ctx.model.Zan.destrory({
          where: {
            userId: ctx.request.body.userId,
            articleId: ctx.request.body.articleId,
          },
        });
      } else {
        await ctx.model.Zan.create({
          userId: ctx.request.body.userId,
          articleId: ctx.request.body.articleId,
          zan: 1,
        });
      }
      ctx.body = this.fail('点赞成功');
    } catch (e) {
      ctx.body = this.fail('点赞失败');
    }
  }
  async comment() {
    const ctx = this.ctx;
    try {
      const res = await ctx.model.Comment.create({
        userId: ctx.request.body.userId,
        articleId: ctx.request.body.articleId,
        comment: ctx.request.body.comment,
      });
      ctx.body = this.fail('评论成功');
    } catch (e) {
      ctx.body = this.fail('评论失败');
    }
  }
  async authorArticle() {
    const ctx = this.ctx;
    try {
      const res = await ctx.model.Article.findOne({

      })
    }
  }
}

module.exports = Article;
