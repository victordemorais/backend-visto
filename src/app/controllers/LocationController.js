import moment from 'moment';

import Location from '../models/Location';
import Client from './ClientController';

const ISO_DATE = 'YYYY-MM-DD';

const checkDate = (start, end) =>
  moment(start, ISO_DATE).isAfter(moment(end, ISO_DATE));

class LocationController {
  async list(req, res) {
    const locations = await Location.findAll();
    if (!locations) return res.json({ message: 'Nenhum locação feita' });

    return res.json(locations);
  }

  async store(req, res) {
    const { cpf, start_date, end_date } = req.body;

    if (checkDate(start_date, end_date))
      return res.json({
        message:
          'Erro: A Data de início da locação é maior do que a data final.',
      });

    const client = await Client.findByCpf(cpf);
    if (client) {
      const location = await Location.create({
        start_date,
        end_date,
        id_client: client.id,
      });

      return res.json(location);
    }
    return res.json({ message: 'Erro ao locar um veículo.' });
  }

  async update(req, res) {
    const { id } = req.params;
    const { cpf, start_date, end_date } = req.body;
    const clientExists = await Client.findByCpf(cpf);

    if (checkDate(start_date, end_date))
      return res.json({
        message:
          'Erro: A Data de início da locação é maior do que a data final.',
      });

    if (!clientExists)
      return res.json({ message: 'Cliente não encontrado com este CPF' });
    await Location.update(
      { start_date, end_date },
      { where: { id, id_client: clientExists.id } }
    );

    return res.json({
      message: `Dados da locação atualizado para o cliente ${clientExists.name}`,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const locationExists = await Location.findByPk(id);
    if (!locationExists)
      return res.json({
        message: 'Locação não encontrada com este identificador.',
      });

    await Location.destroy({
      where: {
        id,
      },
    });

    return res.json({ message: `Locação ${id} deletada com sucesso.` });
  }

  async findLocationsByCpf(req, res) {
    const { cpf } = req.params;

    const { id } = await Client.findByCpf(cpf);
    if (!id)
      return res.json({ message: 'Cliente não encontrado com este CPF' });

    const allLocation = await Location.findAll({
      where: { id_client: id },
    });

    return res.json(allLocation);
  }
}

export default new LocationController();
