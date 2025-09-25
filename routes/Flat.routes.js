const express = require("express");
const FlatRoutes = express.Router();
const flatController = require("../controller/FlatController");

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat management
 */

/**
 * @swagger
 * /api/flats:
 *   post:
 *     tags: [Flat]
 *     summary: Create a new flat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                 type: string
 *     responses:
 *       201:
 *         description: Flat created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
FlatRoutes.post("/flats", flatController.createFlat);

/**
 * @swagger
 * /api/flats:
 *   get:
 *     tags: [Flat]
 *     summary: Get all flats
 *     responses:
 *       200:
 *         description: List of all flats
 *       500:
 *         description: Server error
 */
FlatRoutes.get("/flats", flatController.getAllFlats);

/**
 * @swagger
 * /api/flats/{id}:
 *   get:
 *     tags: [Flat]
 *     summary: Get a flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Flat details
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
FlatRoutes.get("/flats/:id", flatController.getFlatById);

/**
 * @swagger
 * /api/flats/{id}:
 *   put:
 *     tags: [Flat]
 *     summary: Update a flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                 type: string
 *     responses:
 *       200:
 *         description: Flat updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
FlatRoutes.put("/flats/:id", flatController.updateFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   delete:
 *     tags: [Flat]
 *     summary: Delete a flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Flat deleted successfully
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
FlatRoutes.delete("/flats/:id", flatController.deleteFlat);

module.exports = FlatRoutes;
