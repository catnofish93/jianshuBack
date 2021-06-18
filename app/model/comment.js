'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const comment = app.model.define('comments', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    comment: STRING,
    article_id: INTEGER,
  });
  return comment;
};
