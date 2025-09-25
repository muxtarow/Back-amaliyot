const express = require("express");
const Venue_VenueRoutes = express.Router();
const venue_venuetypeController = require("../controller/venue_venuetypeController");

/**
 * @swagger
 * tags:
 *   name: Venue_venueType
 *   description: Venue management
 */

/**
 * @swagger
 * /api/venue_venueType:
 *   post:
 *     tags: [Venue_venueType]
 *     summary: Create a new Venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: number
 *               venueTypeId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Venue created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
Venue_VenueRoutes.post("/venue_venueType", venue_venuetypeController.createVenueVenueType);

/**
 * @swagger
 * /api/venue_venueType:
 *   get:
 *     tags: [Venue_venueType]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
Venue_VenueRoutes.get("/venue_venueType", venue_venuetypeController.getAllVenueVenueTypeModel);

/**
 * @swagger
 * /api/venue_venueType/{id}:
 *   get:
 *     tags: [Venue_venueType]
 *     summary: Get Venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue details
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
Venue_VenueRoutes.get("/venue_venueType/:id", venue_venuetypeController.getVenueVenueTypeModelById);

/**
 * @swagger
 * /api/venue_venueType/{id}:
 *   put:
 *     tags: [Venue_venueType]
 *     summary: Update Venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: number
 *               venueTypeId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Venue updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
Venue_VenueRoutes.put("/venue_venueType/:id", venue_venuetypeController.updateVenueVenueTypeModel);

/**
 * @swagger
 * /api/venue_venueType/{id}:
 *   delete:
 *     tags: [Venue_venueType]
 *     summary: Delete Venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       204:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
Venue_VenueRoutes.delete("/venue_venueType/:id", venue_venuetypeController.deleteVenueVenueTypeModel);

module.exports = Venue_VenueRoutes;
