import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { Router } from 'express';

const options = {
  swaggerDefinition: {
    info: {
      title: 'Arizona | Visto - API',
      version: '1.0',
      description: 'Locação de veículos',
    },
  },
  apis: ['src/routes/*.js'],
};

const specs = swaggerJsdoc(options);
const route = new Router();

export default route.use(
  '/documentation/api',
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
