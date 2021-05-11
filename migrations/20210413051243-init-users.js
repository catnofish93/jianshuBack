'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      phone: STRING(30),
      password: STRING(30),
      age: INTEGER,
      photoUrl: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
    await queryInterface.createTable('article', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(30),
      content: STRING,
      authorName: STRING(10),
      authorId: INTEGER,
      readNum: INTEGER,
      zanNum: INTEGER,
      languageNum: INTEGER,
      updateTime: DATE,
    });
    await queryInterface.createTable('userInfo', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userId: INTEGER,
      concern: STRING,
      collect: STRING,
      like: STRING,
      fans: STRING,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('article');
    await queryInterface.dropTable('userInfo');
  },
};
