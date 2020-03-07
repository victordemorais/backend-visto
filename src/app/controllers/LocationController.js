import Location from '../models/Location';

class LocationController {
  async store(req, res) {
    // const locationExists = await Location.findOne({where: })

    const location = await Location.create(req.body);

    return res.json(location);
  }
}

export default new LocationController();
