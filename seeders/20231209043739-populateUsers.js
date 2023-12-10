'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[

    {
      email: 'aligibli@gmail.com',
      password: 'admin',
      name: 'Bang Messi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    
        email: 'aligibli2@gmail.com',
        password: 'admin2',
        name: 'Bang Messi2',
        createdAt: new Date(),
        updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null,{});
  }
};
