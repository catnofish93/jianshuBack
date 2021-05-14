module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const userInfo = app.model.define('userInfo', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    concern: STRING(255),
    collect: STRING(255),
    like: STRING(255),
    fans: STRING(255),
  });

  return userInfo;
};
