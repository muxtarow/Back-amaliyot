const express = require("express");
const RegionRoutes = express.Router();
const regionController = require("../controller/regionController");

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: User management
 */

/**
 * @swagger
 * /api/region:
 *   post:
 *     tags: [Region]
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
RegionRoutes.post("/region", regionController.createRegion);

/**
 * @swagger
 * /api/region:
 *   get:
 *     tags: [Region]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
RegionRoutes.get("/region", regionController.getAllRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   get:
 *     tags: [Region]
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
RegionRoutes.get("/region/:id", regionController.getRegionById);

/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     tags: [Region]
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
RegionRoutes.put("/region/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     tags: [Region]
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
RegionRoutes.delete("/region/:id", regionController.deleteRegion);

module.exports = RegionRoutes;
