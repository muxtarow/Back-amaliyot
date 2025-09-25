const express = require("express");
const DeliveryRoutes = express.Router();
const deliveryController = require("../controller/DeliveryController");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Delivery methods management
 */

/**
 * @swagger
 * /api/deliveries:
 *   post:
 *     tags: [Delivery]
 *     summary: Create a new delivery method
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
 *         description: Delivery method created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
DeliveryRoutes.post("/deliveries", deliveryController.createDelivery);

/**
 * @swagger
 * /api/deliveries:
 *   get:
 *     tags: [Delivery]
 *     summary: Get all delivery methods
 *     responses:
 *       200:
 *         description: List of all delivery methods
 *       500:
 *         description: Server error
 */
DeliveryRoutes.get("/deliveries", deliveryController.getAllDeliveries);

/**
 * @swagger
 * /api/deliveries/{id}:
 *   get:
 *     tags: [Delivery]
 *     summary: Get a delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Delivery method details
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
DeliveryRoutes.get("/deliveries/:id", deliveryController.getDeliveryById);

/**
 * @swagger
 * /api/deliveries/{id}:
 *   put:
 *     tags: [Delivery]
 *     summary: Update a delivery method by ID
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
 *         description: Delivery method updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
DeliveryRoutes.put("/deliveries/:id", deliveryController.updateDelivery);

/**
 * @swagger
 * /api/deliveries/{id}:
 *   delete:
 *     tags: [Delivery]
 *     summary: Delete a delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Delivery method deleted successfully
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
DeliveryRoutes.delete("/deliveries/:id", deliveryController.deleteDelivery);

module.exports = DeliveryRoutes;
