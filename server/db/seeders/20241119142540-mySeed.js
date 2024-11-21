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
        img: 'img-1.png',
        price: 1234,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-2',
        img: 'img-2.png',
        price: 2345,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-3',
        img: 'img-3.png',
        price: 3456,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-4',
        img: 'img-4.png',
        price: 4567,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-5',
        img: 'img-5.png',
        price: 5678,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-6',
        img: 'img-6.png',
        price: 6789,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-7',
        img: 'img-7.png',
        price: 7890,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-8',
        img: 'img-8.png',
        price: 8901,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-9',
        img: 'img-9.png',
        price: 9012,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-10',
        img: 'img-10.png',
        price: 1023,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-11',
        img: 'img-11.png',
        price: 1134,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-12',
        img: 'img-12.png',
        price: 1245,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-13',
        img: 'img-13.png',
        price: 1356,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-14',
        img: 'img-14.png',
        price: 1467,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-15',
        img: 'img-15.png',
        price: 1578,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-16',
        img: 'img-16.png',
        price: 1689,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-17',
        img: 'img-17.png',
        price: 1790,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-18',
        img: 'img-18.png',
        price: 1801,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-19',
        img: 'img-19.png',
        price: 1912,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-20',
        img: 'img-20.png',
        price: 2023,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-21',
        img: 'img-21.png',
        price: 2134,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-22',
        img: 'img-22.png',
        price: 2245,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-23',
        img: 'img-23.png',
        price: 2356,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-24',
        img: 'img-24.png',
        price: 2467,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'myBox-25',
        img: 'img-25.png',
        price: 2578,
        userId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await Comment.bulkCreate([
      {
        text: 'Hello world!',
        iserId: 1,
        boxId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Wednesday, dudes!',
        iserId: 2,
        boxId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Kwa-kwa :)',
        iserId: 3,
        boxId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
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
