module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const zan = app.model.define('zans', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: INTEGER,
    article_id: INTEGER,
    zan: INTEGER,
  });
  return zan;
};
