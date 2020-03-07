import Sequelize, { Model } from 'sequelize';

class location extends Model {
  static init(sequelize) {
    super.init(
      {
        id_client: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      { sequelize }
    );
  }
}

export default location;
