const { Ticket, Event, Seat, Status, TicketType } = require("../models");
const { validateTicket } = require("../validation/TicketValidation")


exports.createTicket = async (req, res) => {
    const validation = validateTicket(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });
    try {
        const { event_id, seat_id, price, service_fee, status_id, ticket_type } = req.body;

        if (!event_id || !seat_id || !price || !service_fee || !status_id || !ticket_type) {
            return res.status(400).json({ error: "Barcha maydonlar to‘ldirilishi shart." });
        }

        const newTicket = await Ticket.create({ event_id, seat_id, price, service_fee, status_id, ticket_type });
        res.status(201).json(newTicket);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll({
            include: [
                { model: Event, as: "event" },
                { model: Seat, as: "seat" },
                { model: Status, as: "status" },
                { model: TicketType, as: "ticketType" },
            ],
        });
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};

exports.getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await Ticket.findByPk(id, {
            include: [
                { model: Event, as: "event" },
                { model: Seat, as: "seat" },
                { model: Status, as: "status" },
                { model: TicketType, as: "ticketType" },
            ],
        });

        if (!ticket) {
            return res.status(404).json({ error: "Ticket topilmadi." });
        }

        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};

exports.updateTicket = async (req, res) => {
    const validation = validateTicket(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });

    try {
        const { id } = req.params;
        const { event_id, seat_id, price, service_fee, status_id, ticket_type } = req.body;

        const ticket = await Ticket.findByPk(id);
        if (!ticket) {
            return res.status(404).json({ error: "Ticket topilmadi." });
        }

        ticket.event_id = event_id || ticket.event_id;
        ticket.seat_id = seat_id || ticket.seat_id;
        ticket.price = price || ticket.price;
        ticket.service_fee = service_fee || ticket.service_fee;
        ticket.status_id = status_id || ticket.status_id;
        ticket.ticket_type = ticket_type || ticket.ticket_type;

        await ticket.save();
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};

exports.deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findByPk(id);

        if (!ticket) {
            return res.status(404).json({ error: "Ticket topilmadi." });
        }

        await ticket.destroy();
        res.status(200).json({ message: "Ticket o‘chirildi." });
    } catch (error) {
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
};


