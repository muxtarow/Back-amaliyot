const express = require("express");
const SeatTypeRoutes = express.Router();
const seattypeController = require("../controller/seattypeController");

/**
 * @swagger
 * tags:
 *   name: Seat_type
 *   description: User management
 */

/**
 * @swagger
 * /api/seat_type:
 *   post:
 *     tags: [Seat_type]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
SeatTypeRoutes.post("/seat_type", seattypeController.createSeatType);

/**
 * @swagger
 * /api/seat_type:
 *   get:
 *     tags: [Seat_type]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
SeatTypeRoutes.get("/seat_type", seattypeController.getAllSeatTypes);

/**
 * @swagger
 * /api/seat_type/{id}:
 *   get:
 *     tags: [Seat_type]
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
SeatTypeRoutes.get("/seat_type/:id", seattypeController.getSeatTypeById);

/**
 * @swagger
 * /api/seat_type/{id}:
 *   put:
 *     tags: [Seat_type]
 *     summary: Update user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
SeatTypeRoutes.put("/seat_type/:id", seattypeController.updateSeatType);

/**
 * @swagger
 * /api/seat_type/{id}:
 *   delete:
 *     tags: [Seat_type]
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       204:
 *         description: User deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
SeatTypeRoutes.delete("/seat_type/:id", seattypeController.deleteSeatType);

module.exports = SeatTypeRoutes;
