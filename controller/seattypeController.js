const { Seat_type } = require("../models");
const { validateSeatType } = require("../validation/SeatTypeValidation");

exports.createSeatType = async (req, res) => {
    const validation = validateSeatType(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);
    
    try {
        const { name } = req.body;
        const seatType = await Seat_type.create({ name });
        res.status(201).json(seatType);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllSeatTypes = async (req, res) => {
    try {
        const seatTypes = await Seat_type.findAll();
        res.json(seatTypes);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getSeatTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const seatType = await Seat_type.findByPk(id);
        if (!seatType) return res.status(404).json({ error: "Seat Type not found" });
        res.json(seatType);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateSeatType = async (req, res) => {
    const validation = validateSeatType(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    try {
        const { id } = req.params;
        const { name } = req.body;
        const seatType = await Seat_type.findByPk(id);
        if (!seatType) return res.status(404).json({ error: "Seat Type not found" });
        await seatType.update({ name });
        res.json(seatType);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteSeatType = async (req, res) => {
    try {
        const { id } = req.params;
        const seatType = await Seat_type.findByPk(id);
        if (!seatType) return res.status(404).json({ error: "Seat Type not found" });
        await seatType.destroy();
        res.json({ message: "Seat Type deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
