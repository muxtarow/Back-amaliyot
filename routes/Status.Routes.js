const express = require("express");
const StatusRoutes = express.Router();
const statusController = require("../controller/StatusController");

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Status management
 */

/**
 * @swagger
 * /api/statuses:
 *   post:
 *     tags: [Status]
 *     summary: Create a new status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Status created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
StatusRoutes.post("/statuses", statusController.createStatus);


/**
 * @swagger
 * /api/statuses:
 *   get:
 *     tags: [Status]
 *     summary: Barcha status olish
 *     responses:
 *       200:
 *         description: Statuslar ro‘yxati
 *       500:
 *         description: Server xatosi
 */
StatusRoutes.get("/statuses", statusController.getAllStatus);


/**
 * @swagger
 * /api/statuses/{id}:
 *   get:
 *     tags: [Status]
 *     summary: Get a status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Status details
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
StatusRoutes.get("/statuses/:id", statusController.getStatusById);

/**
 * @swagger
 * /api/statuses/{id}:
 *   put:
 *     tags: [Status]
 *     summary: Update a status by ID
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
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
StatusRoutes.put("/statuses/:id", statusController.updateStatus);

/**
 * @swagger
 * /api/statuses/{id}:
 *   delete:
 *     tags: [Status]
 *     summary: Delete a status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Status deleted successfully
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
StatusRoutes.delete("/statuses/:id", statusController.deleteStatus);

module.exports = StatusRoutes;
