import { Router } from 'express';
import LocationController from '../app/controllers/LocationController';

const locationRoutes = new Router();

locationRoutes.get('/', LocationController.list);
locationRoutes.get('/listbyClient', LocationController.findLocationsByCpf);
locationRoutes.post('/create', LocationController.store);
locationRoutes.put('/update/:id', LocationController.update);
locationRoutes.delete('/delete/:id', LocationController.delete);

export default locationRoutes;
