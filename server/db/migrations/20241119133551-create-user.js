'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false, // не может быть пустым
      },
      email: {
        type: Sequelize.STRING,
        unique: true, // уникальность вкл
        allowNull: false, // не может быть пустым
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, // не может быть пустым
      },
      balance: {
        type: Sequelize.INTEGER,
        defaultValue: 10000, // значение по умолчанию
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
