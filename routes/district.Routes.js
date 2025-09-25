const express = require("express");
const DistrictRoutes = express.Router();
const districtController = require("../controller/districtController");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: User management
 */

/**
 * @swagger
 * /api/district:
 *   post:
 *     tags: [District]
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
 *               regionId:
 *                 type: number
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
DistrictRoutes.post("/district", districtController.createDistrict);

/**
 * @swagger
 * /api/district:
 *   get:
 *     tags: [District]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
DistrictRoutes.get("/district", districtController.getAllDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   get:
 *     tags: [District]
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
DistrictRoutes.get("/district/:id", districtController.getDistrictById);

/**
 * @swagger
 * /api/district/{id}:
 *   put:
 *     tags: [District]
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
 *               regionId:
 *                 type: number
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
DistrictRoutes.put("/district/:id", districtController.updateDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   delete:
 *     tags: [District]
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
DistrictRoutes.delete("/district/:id", districtController.deleteDistrict);

module.exports = DistrictRoutes;
