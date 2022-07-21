'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.renameColumn('users', 'user', 'email');
  },
  
  async down (queryInterface, Sequelize) {
    return await queryInterface.renameColumn('users', 'email', 'user');
  }
};