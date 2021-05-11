'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const article = app.model.define('article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(30),
    content: STRING(255),
    authorName: STRING(10),
    authorId: INTEGER,
    readNum: INTEGER,
    zanNum: INTEGER,
    languageNum: INTEGER,
    updateTime: DATE,
  });

  return article;
};
