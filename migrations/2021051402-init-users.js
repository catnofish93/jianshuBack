'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      phone: STRING(30),
      email: STRING,
      password: STRING(30),
      age: INTEGER,
      sex: INTEGER,
      photo_url: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(30),
      content: STRING(10000),
      author_name: STRING(10),
      author_id: INTEGER,
      read_num: INTEGER,
      zan_num: INTEGER,
      language_num: INTEGER,
      comment_num: INTEGER,
      like_num: INTEGER,
      created_at: DATE,
      updated_at: DATE,
      discription: STRING(100),
    });
    await queryInterface.createTable('userInfos', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: INTEGER,
      concern: STRING,
      collect: STRING,
      like: STRING,
      fans: STRING,
    });
    await queryInterface.createTable('searches', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING,
      search_num: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('article');
    await queryInterface.dropTable('userInfo');
  },
};
