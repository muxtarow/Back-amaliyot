const express = require("express");
const venueTypeRoutes = express.Router();
const venuetypeController = require("../controller/venue.typeController");
const { validateVenueType } = require("../validation/venue.type.validation")

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: User management
 */

/**
 * @swagger
 * /api/venue_type:
 *   post:
 *     tags: [VenueType]
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
venueTypeRoutes.post("/venue_type", venuetypeController.createVenueType);

/**
 * @swagger
 * /api/venue_type:
 *   get:
 *     tags: [VenueType]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
venueTypeRoutes.get("/venue_type", venuetypeController.getAllVenueTypes);

/**
 * @swagger
 * /api/venue_type/{id}:
 *   get:
 *     tags: [VenueType]
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
venueTypeRoutes.get("/venue_type/:id", venuetypeController.getVenueTypeById);

/**
 * @swagger
 * /api/venue_type/{id}:
 *   put:
 *     tags: [VenueType]
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
venueTypeRoutes.put("/venue_type/:id", venuetypeController.updateVenueType);

/**
 * @swagger
 * /api/venue_type/{id}:
 *   delete:
 *     tags: [VenueType]
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
venueTypeRoutes.delete("/venue_type/:id", venuetypeController.deleteVenueType);

module.exports = venueTypeRoutes;
