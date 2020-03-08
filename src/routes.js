import { Router } from 'express';
import clientRoutes from './routes/user';
import locationRoutes from './routes/location';

const routes = new Router();

routes.use('/clients', clientRoutes);
routes.use('/locations', locationRoutes);
export default routes;
