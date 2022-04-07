'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
  [
    {
      title: 'As cronicas de Bruneixun',
      author: 'Bruneixun',
      pageQuantity: 200,
      createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt:Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
