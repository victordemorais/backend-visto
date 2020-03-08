import { Router } from 'express';
import ClientController from '../app/controllers/ClientController';

const clientRoutes = new Router();

/**
 * @swagger
 * definitions:
 *   Cliente:
 *     properties:
 *       name:
 *         type: string
 *       cpf:
 *         type: string
 */

/**
 * @swagger
 * /clients:
 *  get:
 *    tags:
 *      - Clientes
 *    description: Retorna a lista dos clientes cadastrados.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *       description: Lista de clientes.
 */
clientRoutes.get('/', ClientController.list);
/**
 * @swagger
 * /clients/create:
 *  post:
 *    tags:
 *      - Clientes
 *    description: Cadastra um novo cliente.
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: Cadastrar Cliente
 *         description: Usar o modelo do cliente
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Cliente'
 *    responses:
 *      200:
 *       description: Cadastrado com sucesso.
 */
clientRoutes.post('/create', ClientController.store);
/**
 * @swagger
 * /clients/update:
 *  put:
 *    tags:
 *      - Clientes
 *    description: Atualiza um cliente existente.
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: Atualizar Cliente
 *         description: Utilize como base o modelo do cliente.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Cliente'
 *    responses:
 *      200:
 *       description: Atualizado com sucesso.
 */
clientRoutes.put('/update', ClientController.update);
/**
 * @swagger
 * /clients/delete/{id}:
 *  delete:
 *    tags:
 *      - Clientes
 *    description: Deleta cliente existente.
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: id
 *         description: Digite o código do cliente.
 *         in: path
 *         required: true
 *         type: integer
 *    responses:
 *      200:
 *       description: Deletado com sucesso.
 */
clientRoutes.delete('/delete/:id', ClientController.delete);

export default clientRoutes;
