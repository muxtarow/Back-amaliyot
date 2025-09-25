const { HumanCategory } = require("../models");
const { validateHumanCategory } = require("../validation/HumanCategoryValidation")

exports.createHumanCategory = async (req, res) => {
    const { error } = validateHumanCategory(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const humanCategory = await HumanCategory.create(req.body);
        res.status(201).json(humanCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllHumanCategories = async (req, res) => {
    try {
        const humanCategories = await HumanCategory.findAll();
        res.status(200).json(humanCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getHumanCategoryById = async (req, res) => {
    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id);
        if (!humanCategory)
            return res.status(404).json({ error: "HumanCategory not found" });
        res.status(200).json(humanCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateHumanCategory = async (req, res) => {
    const { error } = validateHumanCategory(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id);
        if (!humanCategory)
            return res.status(404).json({ error: "HumanCategory not found" });
        await humanCategory.update(req.body);
        res.status(200).json(humanCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteHumanCategory = async (req, res) => {
    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id);
        if (!humanCategory)
            return res.status(404).json({ error: "HumanCategory not found" });
        await humanCategory.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
