const { TicketType } = require("../models");
const { validateTicketType } = require("../validation/TicketTypeValidation")


exports.createTicketType = async (req, res) => {
    const validation = validateTicketType(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });
    try {
        const { color, name } = req.body;

        if (!color || !name) {
            return res.status(400).json({ error: "Color va name maydonlari talab qilinadi." });
        }

        const newTicketType = await TicketType.create({ color, name });
        res.status(201).json(newTicketType);
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};
exports.getAllTicketTypes = async (req, res) => {
    try {
        const ticketTypes = await TicketType.findAll();
        res.status(200).json(ticketTypes);
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};

exports.getTicketTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const ticketType = await TicketType.findByPk(id);

        if (!ticketType) {
            return res.status(404).json({ error: "Ticket turi topilmadi." });
        }

        res.status(200).json(ticketType);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};


exports.updateTicketType = async (req, res) => {
    const validation = validateTicketType(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });
    try {
        const { id } = req.params;
        const { color, name } = req.body;

        const ticketType = await TicketType.findByPk(id);
        if (!ticketType) {
            return res.status(404).json({ error: "Ticket turi topilmadi." });
        }

        ticketType.color = color || ticketType.color;
        ticketType.name = name || ticketType.name;
        await ticketType.save();

        res.status(200).json(ticketType);
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};

exports.deleteTicketType = async (req, res) => {
    try {
        const { id } = req.params;
        const ticketType = await TicketType.findByPk(id);

        if (!ticketType) {
            return res.status(404).json({ error: "Ticket turi topilmadi." });
        }

        await ticketType.destroy();
        res.status(200).json({ message: "Ticket turi o‘chirildi." });
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }   
};

