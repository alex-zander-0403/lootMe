'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false, // не может быть пустым
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // к какой таблице привязка
          key: 'id', // к какому ключу
        },
        onDelete: 'SET NULL', // 'SET NULL'/'CASCADE'
      },
      boxId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Boxes', // к какой таблице привязка
          key: 'id', // к какому ключу
        },
        onDelete: 'SET NULL', // 'SET NULL'/'CASCADE'
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
    await queryInterface.dropTable('Comments');
  },
};
