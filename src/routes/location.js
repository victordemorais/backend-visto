import { Router } from 'express';
import LocationController from '../app/controllers/LocationController';

const locationRoutes = new Router();

/**
 * @swagger
 * definitions:
 *   Locação:
 *     properties:
 *       cpf:
 *         type: string
 *       start_date:
 *         type: string
 *       end_date:
 *         type: string
 */

/**
 * @swagger
 * /location:
 *  get:
 *    tags:
 *      - Locações
 *    description: Retorna a lista das Locações efetivadas.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *       description: Lista de Locações.
 */
locationRoutes.get('/', LocationController.list);
/**
 * @swagger
 * /locations/listbyClient/{cpf}:
 *  get:
 *    tags:
 *      - Locações
 *    description: Retorna lista de locações baseado no CPF.
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: cpf
 *         description: Utilize o CPF
 *         in: path
 *         type: integer
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Locação'
 *    responses:
 *      200:
 *       description: Retorno da lista de locações.
 */
locationRoutes.get('/listbyClient/:cpf', LocationController.findLocationsByCpf);
/**
 * @swagger
 * /locations/create:
 *  post:
 *    tags:
 *      - Locações
 *    description: Cadastra uma nova locação.
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: Cadastrar Locação
 *         description: Usar o modelo de locação
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Locação'
 *    responses:
 *      200:
 *       description: Cadastrado com sucesso.
 */
locationRoutes.post('/create', LocationController.store);
/**
 * @swagger
 * /locations/update/{id}:
 *  put:
 *    tags:
 *      - Locações
 *    description: Atualizar uma locação.
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: id
 *         in: path
 *         description: Utilize o Id
 *         type: integer
 *         required: true
 *       - name: Modelo de locação
 *         description: Atualizar com base no ID
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Locação'
 *    responses:
 *      200:
 *       description: Atualizado com sucesso.
 */
locationRoutes.put('/update/:id', LocationController.update);
/**
 * @swagger
 * /locations/delete/{id}:
 *  delete:
 *    tags:
 *      - Locações
 *    description: Deleta locação existente.
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: id
 *         description: Digite o código da locação.
 *         in: path
 *         required: true
 *         type: integer
 *    responses:
 *      200:
 *       description: Deletado com sucesso.
 */
locationRoutes.delete('/delete/:id', LocationController.delete);

export default locationRoutes;
