'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Boxes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        unique: true, // уникальность вкл
        allowNull: false, // не может быть пустым
      },
      img: {
        type: Sequelize.STRING,
        // defaultValue: './default-img.jpg', // значение по умолчанию
      },
      price: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Boxes');
  },
};
