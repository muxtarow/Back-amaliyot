const express = require("express");
const GenderRoutes = express.Router();
const genderController = require("../controller/GenderController");

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: Gender management
 */

/**
 * @swagger
 * /api/genders:
 *   post:
 *     tags: [Gender]
 *     summary: Create a new gender
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
 *         description: Gender created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
GenderRoutes.post("/genders", genderController.createGender);

/**
 * @swagger
 * /api/genders:
 *   get:
 *     tags: [Gender]
 *     summary: Get all genders
 *     responses:
 *       200:
 *         description: List of all genders
 *       500:
 *         description: Server error
 */
GenderRoutes.get("/genders", genderController.getAllGenders);

/**
 * @swagger
 * /api/genders/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get a gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gender details
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
GenderRoutes.get("/genders/:id", genderController.getGenderById);

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     tags: [Gender]
 *     summary: Update a gender by ID
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
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Gender updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
GenderRoutes.put("/genders/:id", genderController.updateGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     tags: [Gender]
 *     summary: Delete a gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Gender deleted successfully
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
GenderRoutes.delete("/genders/:id", genderController.deleteGender);

module.exports = GenderRoutes;
