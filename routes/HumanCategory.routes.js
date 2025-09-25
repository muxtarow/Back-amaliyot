const express = require("express");
const HumanCategoryRoutes = express.Router();
const humanCategoryController = require("../controller/HumanCategoryController");

/**
 * @swagger
 * tags:
 *   name: HumanCategory
 *   description: Human Category management
 */

/**
 * @swagger
 * /api/human_categories:
 *   post:
 *     tags: [HumanCategory]
 *     summary: Create a new human category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *     responses:
 *       201:
 *         description: Human category created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
HumanCategoryRoutes.post("/human_categories", humanCategoryController.createHumanCategory);

/**
 * @swagger
 * /api/human_categories:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Get all human categories
 *     responses:
 *       200:
 *         description: List of all human categories
 *       500:
 *         description: Server error
 */
HumanCategoryRoutes.get("/human_categories", humanCategoryController.getAllHumanCategories);

/**
 * @swagger
 * /api/human_categories/{id}:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Get a human category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Human category details
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
HumanCategoryRoutes.get("/human_categories/:id", humanCategoryController.getHumanCategoryById);

/**
 * @swagger
 * /api/human_categories/{id}:
 *   put:
 *     tags: [HumanCategory]
 *     summary: Update a human category by ID
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
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *     responses:
 *       200:
 *         description: Human category updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
HumanCategoryRoutes.put("/human_categories/:id", humanCategoryController.updateHumanCategory);

/**
 * @swagger
 * /api/human_categories/{id}:
 *   delete:
 *     tags: [HumanCategory]
 *     summary: Delete a human category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Human category deleted successfully
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
HumanCategoryRoutes.delete("/human_categories/:id", humanCategoryController.deleteHumanCategory);

module.exports = HumanCategoryRoutes;
