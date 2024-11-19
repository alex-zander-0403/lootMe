'use strict';

const { User } = require('../models');
const { Box } = require('../models');
const { Comment } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Alex',
        email: '111@111',
        password: '111',
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        email: '222@222',
        password: '222',
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Carl',
        email: '333@333',
        password: '333',
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await Box.bulkCreate([
      {
        title: 'myBox-1',
        img: 'img-1',
        price: 700,
        userId: 1,
      },
      {
        title: 'myBox-2',
        img: 'img-2',
        price: 1100,
        userId: 2,
      },
      {
        title: 'myBox-3',
        img: 'img-3',
        price: 850,
        userId: 3,
      },
    ]);
    await Comment.bulkCreate([
      {
        text: 'Hello world!',
        iserId: 1,
        boxId: 1,
      },
      {
        text: 'Wednesday, dudes!',
        iserId: 2,
        boxId: 2,
      },
      {
        text: 'Kwa-kwa :)',
        iserId: 3,
        boxId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
