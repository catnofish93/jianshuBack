'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth();
  router.get('/getSearchList', auth, controller.search.list);
  router.post('/login', controller.login.login);
  router.post('/register', controller.login.register);
  router.post('/articleList', auth, controller.article.getArticleList);
  router.post('/clickZan', auth, controller.article.clickZan);
  router.post('/addArticle', auth, controller.article.addArtile);
  router.post('/articleDetail', auth, controller.article.articleDetail);
  router.post('/upload', auth, controller.upload.upload);
  router.post('/userInfo/getIntroduce', auth, controller.user.getUserIntroduce);
  router.post('/userInfo/setIntroduce', auth, controller.user.setUserIntroduce);
  router.post('/userInfo/getUserInfo', auth, controller.user.getUserInfo);
  router.post('/authorArticle', auth, controller.article.authorArticle);
  router.post('/recommendArticle', auth, controller.article.recommendArticle);
};
