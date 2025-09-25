const { VenueType } = require("../models");
const { validateVenueType } = require("../validation/venue.type.validation")


exports.createVenueType = async (req, res) => {
    const validation = validateVenueType(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);
    try {
        const { name } = req.body;
        const venueType = await VenueType.create({ name });
        res.status(201).json(venueType);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllVenueTypes = async (req, res) => {
    try {
        const venueTypes = await VenueType.findAll();
        res.json(venueTypes);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getVenueTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const venueType = await VenueType.findByPk(id);
        if (!venueType) return res.status(404).json({ error: "VenueType not found" });
        res.json(venueType);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.updateVenueType = async (req, res) => {
    const validation = validateVenueType(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    try {
        const { id } = req.params;
        const { name } = req.body;
        const venueType = await VenueType.findByPk(id);
        if (!venueType) return res.status(404).json({ error: "VenueType not found" });
        await venueType.update({ name });
        res.json(venueType);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteVenueType = async (req, res) => {
    try {
        const { id } = req.params;
        const venueType = await VenueType.findByPk(id);
        if (!venueType) return res.status(404).json({ error: "VenueType not found" });
        await venueType.destroy();
        res.json({ message: "VenueType deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};