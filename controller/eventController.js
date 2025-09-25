const { Event, EventType, HumanCategory, VenueModel, Lang } = require("../models");
const { validateEvent } = require("../validation/EventValidation")

exports.createEvent = async (req, res) => {
    const { error } = validateEvent(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).send(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id, {
            include: [
                { model: EventType, as: "eventType" },
                { model: HumanCategory, as: "humanCategory" },
                { model: VenueModel, as: "venue" },
                { model: Lang, as: "language" },
            ],
        });
        if (!event) return res.status(404).send("Event not found");
        res.status(200).send(event);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateEvent = async (req, res) => {
    const { error } = validateEvent(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ error: "Event not found" });
        await event.update(req.body);
        res.status(200).send(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).send({ error: "Event not found" });
        await event.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};
