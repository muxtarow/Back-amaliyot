const { Seat, Seat_type, VenueModel, Sector } = require("../models");
const { validateSeat } = require("../validation/seatValidation");

exports.createSeat = async (req, res) => {
  const validation = validateSeat(req.body);
  if (validation.error)
    return res.status(400).send(validation.error.details[0].message);

  try {
    const seat = await Seat.create(req.body);
    res.status(201).send(seat);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.status(200).send(seats);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        { model: Seat_type, as: "seat_type" },
        { model: Sector, as: "sector" },
        { model: VenueModel, as: "seat_venue" },
      ],
    });
    if (!seat) return res.status(404).send("seat not found");
    res.status(200).send(seat);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateSeat = async (req, res) => {
  const validation = validateSeat(req.body);
  if (validation.error)
    return res.status(400).send(validation.error.details[0].message);

  try {
    const { id } = req.params;
    const {
      sector_id,
      row_number,
      number,
      venue_id,
      seat_type_id,
      location_in_schema,
    } = req.body;
    const seat = await Seat.findByPk(id);
    if (!seat) return res.status(404).json({ error: "Seat not found" });
    await seat.update({
      sector_id,
      row_number,
      number,
      venue_id,
      seat_type_id,
      location_in_schema,
    });
    res.json(seat);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const { id } = req.params;
    const seat = await Seat.findByPk(id);
    if (!seat) return res.status(404).json({ error: "Seat not found" });
    await seat.destroy();
    res.json({ message: "Seat deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
