'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('users', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull:false
  },

  user:{
      type: Sequelize.STRING,
      allowNull: false
  },
  password:{
      type: Sequelize.STRING,
      allowNull: false
  }
    });
     
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('users');
  }
};
