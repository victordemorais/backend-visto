import { Router } from 'express';
import userRoutes from './routes/user';
import locationRoutes from './routes/location';

const routes = new Router();

routes.use('/users', userRoutes);
routes.use('/locations', locationRoutes);

export default routes;
