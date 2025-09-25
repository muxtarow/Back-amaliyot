const { Region } = require("../models");
const { validateRegion } = require("../validation/regionValidation")


exports.createRegion = async (req, res) => {
    const validation = validateRegion(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);
    try {
        const { name } = req.body;
        const region = await Region.create({ name });
        res.status(201).json(region);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllRegion = async (req, res) => {
    try {
        const region = await Region.findAll();
        res.json(region);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getRegionById = async (req, res) => {
    try {
        const { id } = req.params;
        const region = await Region.findByPk(id);
        if (!region) return res.status(404).json({ error: "Region not found" });
        res.json(region);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.updateRegion = async (req, res) => {
    const validation = validateRegion(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    try {
        const { id } = req.params;
        const { name } = req.body;
        const region = await Region.findByPk(id);
        if (!region) return res.status(404).json({ error: "Region not found" });
        await region.update({ name });
        res.json(region);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteRegion = async (req, res) => {
    try {
        const { id } = req.params;
        const region = await Region.findByPk(id);
        if (!region) return res.status(404).json({ error: "Region not found" });
        await region.destroy();
        res.json({ message: "Region deleted successfully" });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: "Internal Server Error" });
    }
};