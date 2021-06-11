'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth();
  router.get('/', controller.home.index);
  router.get('/getSearchList', auth, controller.search.list);
  router.post('/login', controller.login.login);
  router.post('/register', controller.login.register);
  router.post('/articleList', auth, controller.article.getArticleList);
  router.post('/addArticle', auth, controller.article.addArtile);
  router.post('/articleDetail', auth, controller.article.articleDetail);
  router.post('/upload', auth, controller.upload.upload);
};
