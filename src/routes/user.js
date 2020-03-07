import { Router } from 'express';
import ClientController from '../app/controllers/ClientController';

const userRoutes = new Router();

userRoutes.get('/', ClientController.list);
userRoutes.post('/create', ClientController.store);
userRoutes.put('/update', ClientController.update);
userRoutes.delete('/delete/:id', ClientController.delete);

export default userRoutes;
