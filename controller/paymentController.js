const { Payment } = require("../models");
const { validatePayment } = require("../validation/PaymentValidation")

exports.createPayment = async (req, res) => {
    const validation = validatePayment(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).json({ error: "Payment not found" });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePayment = async (req, res) => {
    const validation = validatePayment(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).json({ error: "Payment not found" });
        await payment.update(req.body);
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).json({ error: "Payment not found" });
        await payment.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
