import { Router } from 'express';
import LocationController from '../app/controllers/LocationController';

const locationRoutes = new Router();

locationRoutes.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});
export default locationRoutes;
