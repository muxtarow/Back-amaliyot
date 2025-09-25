const { Delivery } = require("../models");
const { validateDelivery } = require("../validation/DeliveryValidation");

exports.createDelivery = async (req, res) => {
    const { error } = validateDelivery(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const delivery = await Delivery.create(req.body);
        res.status(201).json(delivery);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.findAll();
        res.status(200).json(deliveries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDeliveryById = async (req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if (!delivery) return res.status(404).send("Delivery method not found");
        res.status(200).json(delivery);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.updateDelivery = async (req, res) => {
    const { error } = validateDelivery(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if (!delivery) return res.status(404).json({ error: "Delivery method not found" });

        await delivery.update(req.body);
        res.status(200).json(delivery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if (!delivery) return res.status(404).json({ error: "Delivery method not found" });

        await delivery.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
