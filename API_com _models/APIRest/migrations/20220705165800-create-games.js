'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull:false
},
      title:{
        type: Sequelize.STRING,
        allowNull: false
},
      year:{
        type: Sequelize.INTEGER,
        allowNull: false
},  
      price:{
        type: Sequelize.INTEGER,
        allowNull: false
}


}   
  )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('games');
    }
  }

