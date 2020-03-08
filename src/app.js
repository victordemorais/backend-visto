import express from 'express';
import routes from './routes';
import documentationRoute from './swaggerDoc';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(documentationRoute);
  }
}

export default new App().server;
