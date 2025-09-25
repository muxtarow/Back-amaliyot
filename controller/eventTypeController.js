const { EventType } = require("../models");
const { validateEventType } = require("../validation/EventType")

exports.createEventType = async (req, res) => {
    const { error } = validateEventType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const eventType = await EventType.create(req.body);
        res.status(201).json(eventType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllEventTypes = async (req, res) => {
    try {
        const eventTypes = await EventType.findAll();
        res.status(200).json(eventTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEventTypeById = async (req, res) => {
    try {
        const eventType = await EventType.findByPk(req.params.id);
        if (!eventType) return res.status(404).json({ error: "EventType not found" });
        res.status(200).json(eventType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEventType = async (req, res) => {
    const { error } = validateEventType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const eventType = await EventType.findByPk(req.params.id);
        if (!eventType) return res.status(404).json({ error: "EventType not found" });
        await eventType.update(req.body);
        res.status(200).json(eventType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEventType = async (req, res) => {
    try {
        const eventType = await EventType.findByPk(req.params.id);
        if (!eventType) return res.status(404).json({ error: "EventType not found" });
        await eventType.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
