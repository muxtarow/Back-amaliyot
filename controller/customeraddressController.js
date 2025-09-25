const { CustomerAddress, Customer, Country, Region, District, Flat } = require("../models");
const { validateCustomerAddress } = require("../validation/CustomerAddress");

exports.createCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customerAddress = await CustomerAddress.create(req.body);
        res.status(201).json(customerAddress);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.getAllCustomerAddresses = async (req, res) => {
    try {
        const customerAddresses = await CustomerAddress.findAll();
        res.status(200).send(customerAddresses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomerAddressById = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id, {
            include: [
                { model: Customer, as: "customer" },
                { model: Country, as: "customerAddress" },
                { model: Region, as: "region" },
                { model: District, as: "district" },
                { model: Flat, as: "flat" }
            ],
        });
        if (!customerAddress) return res.status(404).send("CustomerAddress not found");
        res.status(200).send(customerAddress);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id);
        if (!customerAddress) return res.status(404).json({ error: "CustomerAddress not found" });
        await customerAddress.update(req.body);
        res.status(200).send(customerAddress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomerAddress = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id);
        if (!customerAddress) return res.status(404).send({ error: "CustomerAddress not found" });

        const customerAddressData = customerAddress.toJSON();
        await customerAddress.destroy();
        res.status(204).send(customerAddressData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};