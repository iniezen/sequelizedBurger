"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('burgers', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER
        },
        name: Sequelize.STRING,
        devoured: {type: Sequelize.BOOLEAN, default: false},
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('burgers');
  }
};
