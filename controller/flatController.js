const { Flat } = require("../models");
const { validateFlat } = require("../validation/FlatValidation")

exports.createFlat = async (req, res) => {
    const { error } = validateFlat(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const flat = await Flat.create(req.body);
        res.status(201).json(flat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllFlats = async (req, res) => {
    try {
        const flats = await Flat.findAll();
        res.status(200).json(flats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFlatById = async (req, res) => {
    try {
        const flat = await Flat.findByPk(req.params.id);
        if (!flat) return res.status(404).json({ error: "Flat not found" });
        res.status(200).json(flat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateFlat = async (req, res) => {
    const { error } = validateFlat(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const flat = await Flat.findByPk(req.params.id);
        if (!flat) return res.status(404).json({ error: "Flat not found" });
        await flat.update(req.body);
        res.status(200).json(flat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteFlat = async (req, res) => {
    try {
        const flat = await Flat.findByPk(req.params.id);
        if (!flat) return res.status(404).json({ error: "Flat not found" });
        await flat.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
