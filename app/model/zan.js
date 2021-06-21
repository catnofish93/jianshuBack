module.exports = app => {
  const { INTEGER } = app.sequelize;
  const zan = app.model.define('zans', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    articleId: INTEGER,
    zan: INTEGER,
  });
  return zan;
};
