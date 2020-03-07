import Client from '../models/Client';

class ClientController {
  async list(req, res) {
    const clients = await Client.findAll();
    if (!clients) return res.json({ message: 'Nenhum Cliente cadastrado' });

    return res.json(clients);
  }

  async store(req, res) {
    const { cpf } = req.body;
    const clientExists = await Client.findOne({ where: { cpf } });
    if (clientExists)
      return res.json({ message: 'Cliente já cadastrado na base de dados!' });

    const { name } = await Client.create(req.body);

    return res.json({ message: `Cliente ${name} criado com sucesso.` });
  }

  async update(req, res) {
    const { cpf, name } = req.body;
    const clientExists = await Client.findOne({ where: { cpf } });

    if (!clientExists)
      return res.json({ message: 'Cliente não encontrado com este CPF' });

    await Client.update({ name }, { where: { cpf } });

    return res.json({ message: `Cliente ${name}, editado com sucesso.` });
  }

  async delete(req, res) {
    const { id } = req.params;
    const clientExists = await Client.findByPk(id);
    if (!clientExists)
      return res.json({
        message: 'Cliente não encontrado com este identificador.',
      });

    await Client.destroy({
      where: {
        id,
      },
    });

    return res.json({ message: `Cliente ${id} deletado com sucesso.` });
  }
}

export default new ClientController();
