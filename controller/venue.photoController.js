const { VenuePhoto, VenueModel } = require("../models");
const { validateVenuePhoto } = require("../validation/VenuePhotoValidation");

exports.createVenuePhoto = async (req, res) => {
    const validation = validateVenuePhoto(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });

    try {
        const { venueId, url } = req.body;

        const venueExists = await VenueModel.findByPk(venueId);
        if (!venueExists) return res.status(404).json({ error: "Venue topilmadi" });

        const venuePhoto = await VenuePhoto.create({ venueId, url });
        res.status(201).json(venuePhoto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.getAllVenuePhotos = async (req, res) => {
    try {
        const venuePhotos = await VenuePhoto.findAll({
            include: [{ model: VenueModel, as: "venue" }],
        });
        res.json(venuePhotos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.getVenuePhotoById = async (req, res) => {
    try {
        const { id } = req.params;
        const venuePhoto = await VenuePhoto.findByPk(id, {
            include: [{ model: VenueModel, as: "venue" }],
        });

        if (!venuePhoto) return res.status(404).json({ error: "Venue photo topilmadi" });

        res.json(venuePhoto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.updateVenuePhoto = async (req, res) => {
    const validation = validateVenuePhoto(req.body);
    if (validation.error) return res.status(400).json({ error: validation.error.details[0].message });

    try {
        const { id } = req.params;
        const { venueId, url } = req.body;

        const venuePhoto = await VenuePhoto.findByPk(id);
        if (!venuePhoto) return res.status(404).json({ error: "Venue photo topilmadi" });

        const venueExists = await VenueModel.findByPk(venueId);
        if (!venueExists) return res.status(404).json({ error: "Venue topilmadi" });

        await venuePhoto.update({ venueId, url });
        res.json(venuePhoto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};

exports.deleteVenuePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const venuePhoto = await VenuePhoto.findByPk(id);

        if (!venuePhoto) return res.status(404).json({ error: "Venue photo topilmadi" });

        await venuePhoto.destroy();
        res.json({ message: "Venue photo o‘chirildi" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server xatosi" });
    }
};
