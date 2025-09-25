const { Gender } = require("../models");
const { validateGender } = require("../validation/GenderValidation")

exports.createGender = async (req, res) => {
    const { error } = validateGender(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const gender = await Gender.create(req.body);
        res.status(201).json(gender);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllGenders = async (req, res) => {
    try {
        const genders = await Gender.findAll();
        res.status(200).json(genders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getGenderById = async (req, res) => {
    try {
        const gender = await Gender.findByPk(req.params.id);
        if (!gender) return res.status(404).json({ error: "Gender not found" });
        res.status(200).json(gender);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateGender = async (req, res) => {
    const { error } = validateGender(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const gender = await Gender.findByPk(req.params.id);
        if (!gender) return res.status(404).json({ error: "Gender not found" });
        await gender.update(req.body);
        res.status(200).json(gender);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteGender = async (req, res) => {
    try {
        const gender = await Gender.findByPk(req.params.id);
        if (!gender) return res.status(404).json({ error: "Gender not found" });
        await gender.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
