const { District, Region, VenueModel } = require("../models");
const { validateVenue } = require("../validation/VenueValidation")


exports.createVenue = async (req, res) => {
    const { error } = validateVenue(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venueModel = await VenueModel.create(req.body);
        res.status(201).json(venueModel);
    } catch (error) {
        res.status(500).json(error.message);
    }
};
exports.getAllVenueModel = async (req, res) => {
    try {
        const venueModel = await VenueModel.findAll();
        res.status(200).send(venueModel);
    } catch (error) {
        res.status(500).json({ error: message });
    }
};

exports.getVenueModelById = async (req, res) => {
    try {
        const venueModel = await VenueModel.findByPk(req.params.id, {
            include: [
                {
                    model: Region,
                    as: "region",
                },
                {
                    model: District,
                    as: "district",
                }
            ],
        });
        if (!venueModel) return res.status(404).send("VenueModel not found");
        res.status(200).send(venueModel);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.updateVenueModel = async (req, res) => {
    const { error } = validateVenue(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venueModel = await VenueModel.findByPk(req.params.id);
        if (!venueModel) return res.status(404).json({ error: message });
        await venueModel.update(req.body);
        res.status(200).send(venueModel);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.deleteVenueModel = async (req, res) => {
    try {
        const venueModel = await VenueModel.findByPk(req.params.id);
        if (!venueModel) return res.status(404).send({ error: "topilmadi" });

        await venueModel.destroy();
        res.status(200).send({ message: "venue o'chirildi" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};