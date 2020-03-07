module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.renameColumn(
        'locations',
        'client_name',
        'id_client'
      );
      await queryInterface.changeColumn('locations', 'id_client', {
        type: Sequelize.INTEGER,
        allowNull: false,
      });
      await queryInterface.addConstraint('locations', ['id_client'], {
        type: 'FOREIGN KEY',
        name: 'fk_location_client',
        references: {
          table: 'clients',
          field: 'id',
        },
      });

      Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: () => {
    return Promise.resolve();
  },
};
