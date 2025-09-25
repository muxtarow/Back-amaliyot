const { VenueModel, VenueVenueType, VenueType } = require("../models");
const { validateVenue_VenueValidation } = require("../validation/Venue.VenueValidation")


exports.createVenueVenueType = async (req, res) => {
    const { error } = validateVenue_VenueValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venueVenueType = await VenueVenueType.create(req.body);
        res.status(201).json(venueVenueType);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
exports.getAllVenueVenueTypeModel = async (req, res) => {
    try {
        const venueVenueType = await VenueVenueType.findAll();
        res.status(200).send(venueVenueType);
    } catch (error) {
        res.status(500).json({ error: message });
    }
};

exports.getVenueVenueTypeModelById = async (req, res) => {
    try {
        const venueVenueType = await VenueVenueType.findByPk(req.params.id, {
            include: [
                {
                    model: VenueModel,
                    as: "venue",
                },
                {
                    model: VenueType,
                    as: "venueType",
                }
            ],
        });
        if (!venueVenueType) return res.status(404).send("venueVenueType not found");
        res.status(200).send(venueVenueType);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.updateVenueVenueTypeModel = async (req, res) => {
    const { error } = validateVenue_VenueValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venueVenueType = await VenueVenueType.findByPk(req.params.id);
        if (!venueVenueType) return res.status(404).json({ error: message });
        await venueVenueType.update(req.body);
        res.status(200).send(venueVenueType);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.deleteVenueVenueTypeModel = async (req, res) => {
    try {
        const venueVenueType = await VenueVenueType.findByPk(req.params.id);
        if (!venueVenueType) return res.status(404).send({ error: message });

        const venueVenueTypeData = venueVenueType.toJSON();
        await venueVenueType.destroy();
        res.status(204).send(venueVenueTypeData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};