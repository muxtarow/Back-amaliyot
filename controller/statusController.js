const { Status } = require("../models");
const { validateStatus } = require("../validation/StatusValidation")

exports.createStatus = async (req, res) => {
    const validation = validateStatus(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });
    try {
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ error: "Status nomini kiriting." });
        }

        const newStatus = await Status.create({ status });
        res.status(201).json(newStatus);
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};
exports.getAllStatus = async (req, res) => {
    try {
        const status = await Status.findAll();
        res.json(status);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.getStatusById = async (req, res) => {

    try {
        const status = await Status.findByPk(req.params.id);

        if (!status) {
            return res.status(404).send({ error: "Status topilmadi." });
        }

        res.status(200).send(status);
    } catch (error) {
        res.status(500).send({ error: "Serverda xatolik yuz berdi." });
    }
};

exports.updateStatus = async (req, res) => {
    const validation = validateStatus(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });
    try {
        const { id } = req.params;
        const { status } = req.body;

        const existingStatus = await Status.findByPk(id);
        if (!existingStatus) {
            return res.status(404).json({ error: "Status topilmadi." });
        }

        existingStatus.status = status || existingStatus.status;
        await existingStatus.save();

        res.status(200).json(existingStatus);
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};


exports.deleteStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const existingStatus = await Status.findByPk(id);

        if (!existingStatus) {
            return res.status(404).json({ error: "Status topilmadi." });
        }

        await existingStatus.destroy();
        res.status(200).json({ message: "Status o'chirildi." });
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};

