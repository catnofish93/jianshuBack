module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const userInfo = app.model.define('userinfo', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    concern: STRING(255),
    collect: STRING(255),
    like: STRING(255),
    fans: STRING(255),
    introduce: STRING(255),
    created_at: DATE,
    updated_at: DATE
  });

  return userInfo;
};
