const { Lang } = require("../models");
const { validatelenguage } = require("../validation/lenguageValidation")

exports.createLang = async (req, res) => {
    const { error } = validatelenguage(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const lang = await Lang.create(req.body);
        res.status(201).json(lang);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllLangs = async (req, res) => {
    try {
        const langs = await Lang.findAll();
        res.status(200).json(langs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLangById = async (req, res) => {
    try {
        const lang = await Lang.findByPk(req.params.id);
        if (!lang) return res.status(404).json({ error: "Lang not found" });
        res.status(200).json(lang);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateLang = async (req, res) => {
    const { error } = validatelenguage(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const lang = await Lang.findByPk(req.params.id);
        if (!lang) return res.status(404).json({ error: "Lang not found" });
        await lang.update(req.body);
        res.status(200).json(lang);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteLang = async (req, res) => {
    try {
        const lang = await Lang.findByPk(req.params.id);
        if (!lang) return res.status(404).json({ error: "Lang not found" });
        await lang.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
