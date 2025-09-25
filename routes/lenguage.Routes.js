const express = require("express");
const LangRoutes = express.Router();
const lenguageController = require("../controller/lenguageController");

/**
 * @swagger
 * tags:
 *   name: Lang
 *   description: User management
 */

/**
 * @swagger
 * /api/lang:
 *   post:
 *     tags: [Lang]
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
LangRoutes.post("/lang", lenguageController.createLang);

/**
 * @swagger
 * /api/lang:
 *   get:
 *     tags: [Lang]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
LangRoutes.get("/lang", lenguageController.getAllLangs);

/**
 * @swagger
 * /api/lang/{id}:
 *   get:
 *     tags: [Lang]
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
LangRoutes.get("/lang/:id", lenguageController.getLangById);

/**
 * @swagger
 * /api/lang/{id}:
 *   put:
 *     tags: [Lang]
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
LangRoutes.put("/lang/:id", lenguageController.updateLang);

/**
 * @swagger
 * /api/lang/{id}:
 *   delete:
 *     tags: [Lang]
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
LangRoutes.delete("/lang/:id", lenguageController.deleteLang);

module.exports = LangRoutes;
