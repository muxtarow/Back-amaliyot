const express = require("express");
const SeatRoutes = express.Router();
const seatController = require("../controller/seatController");

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seat management
 */

/**
 * @swagger
 * /api/seats:
 *   post:
 *     tags: [Seat]
 *     summary: Create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
SeatRoutes.post("/seats", seatController.createSeat);

/**
 * @swagger
 * /api/seats:
 *   get:
 *     tags: [Seat]
 *     summary: Get all seats
 *     responses:
 *       200:
 *         description: List of seats
 *       500:
 *         description: Server error
 */
SeatRoutes.get("/seats", seatController.getAllSeats);

/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: Get seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat details
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
SeatRoutes.get("/seats/:id", seatController.getSeatById);

/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     tags: [Seat]
 *     summary: Update seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
SeatRoutes.put("/seats/:id", seatController.updateSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: Delete seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       204:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
SeatRoutes.delete("/seats/:id", seatController.deleteSeat);

module.exports = SeatRoutes;
