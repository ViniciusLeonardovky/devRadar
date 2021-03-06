const Developer = require("../models/Developer");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Developer.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 15000
        }
      }
    });

    return res.status(200).json(devs);
  }
};
