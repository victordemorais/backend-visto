import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Location from '../app/models/Location';
import Client from '../app/models/Client';

const models = [Client, Location];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
