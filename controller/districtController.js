const { District, Region } = require("../models");
const { validateDistrict } = require("../validation/districtValidation")


exports.createDistrict = async (req, res) => {
    const { error } = validateDistrict(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const district = await District.create(req.body);
        res.status(201).json(district);
    } catch (error) {
        res.status(500).json({ error: message });
    }
};
exports.getAllDistrict = async (req, res) => {
    try {
        const districts = await District.findAll();
        res.status(200).send(districts);
    } catch (error) {
        res.status(500).json({ error: message });
    }
};

exports.getDistrictById = async (req, res) => {
    try {
        const district = await District.findByPk(req.params.id, {
            include: [
                {
                    model: Region,
                    as: "region",
                },
            ],
        });
        if (!district) return res.status(404).send("District not found");
        res.status(200).send(district);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


exports.updateDistrict = async (req, res) => {
    const { error } = validateDistrict(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const district = await District.findByPk(req.params.id);
        if (!district) return res.status(404).json({ error: message });
        await district.update(req.body);
        res.status(200).send(district);
    } catch (error) {
        res.status(500).json( error.message);
    }
};

exports.deleteDistrict = async (req, res) => {
    try {
        const district = await District.findByPk(req.params.id);
        if (!district) return res.status(404).send({ error: message });

        const districtData = district.toJSON();
        await district.destroy();
        res.status(204).send(districtData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};