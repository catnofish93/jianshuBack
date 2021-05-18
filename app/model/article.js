'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const article = app.model.define('article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(30),
    content: STRING(255),
    author_name: STRING(10),
    author_id: INTEGER,
    discription: STRING(100),
    comment_num: {
      type: INTEGER,
      defaultValue: 0,
    },
    read_num: {
      type: INTEGER,
      defaultValue: 0,
    },
    zan_num: {
      type: INTEGER,
      defaultValue: 0,
    },
    language_num: {
      type: INTEGER,
      defaultValue: 0,
    },
    created_at: DATE,
    updated_at: DATE,
  });

  return article;
};
