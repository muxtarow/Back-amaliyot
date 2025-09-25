const { Sector, Seat } = require("../models");
const { validateSector } = require("../validation/sectorValidation");

exports.createSector = async (req, res) => {
    const validation = validateSector(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });

    try {
        const { sector_name } = req.body;
        const sector = await Sector.create({ sector_name });
        res.status(201).json(sector);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.getAllSectors = async (req, res) => {
    try {
        const sectors = await Sector.findAll({
            include: [{ model: Seat, as: "sector" }],
        });
        res.json(sectors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.getSectorById = async (req, res) => {
    try {
        const { id } = req.params;
        const sector = await Sector.findByPk(id, {
            include: [{ model: Seat, as: "sector" }],
        });

        if (!sector) return res.status(404).json({ error: "Sektor topilmadi" });

        res.json(sector);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.updateSector = async (req, res) => {
    const validation = validateSector(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });

    try {
        const { id } = req.params;
        const { sector_name } = req.body;

        const sector = await Sector.findByPk(id);
        if (!sector) return res.status(404).json({ error: "Sektor topilmadi" });

        await sector.update({ sector_name });
        res.json(sector);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.deleteSector = async (req, res) => {
    try {
        const { id } = req.params;
        const sector = await Sector.findByPk(id);

        if (!sector) return res.status(404).json({ error: "Sektor topilmadi" });

        await sector.destroy();
        res.json({ message: "Sektor o‘chirildi" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};
