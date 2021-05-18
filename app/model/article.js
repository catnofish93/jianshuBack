'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const article = app.model.define('article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(30),
    content: STRING(255),
    author_name: STRING(10),
    author_id: INTEGER,
    read_num: INTEGER,
    zan_num: INTEGER,
    language_num: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return article;
};
