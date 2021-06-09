'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const search = app.model.define('searches', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    search_num: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });
  return search;
};
