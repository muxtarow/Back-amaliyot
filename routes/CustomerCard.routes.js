const express = require("express");
const CustomerCardRoutes = express.Router();
const customerCardController = require("../controller/CustomerCardController");

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: Customer Card management
 */

/**
 * @swagger
 * /api/customer_cards:
 *   post:
 *     tags: [CustomerCard]
 *     summary: Create a new customer card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: number
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Customer Card created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
CustomerCardRoutes.post("/customer_cards", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/customer_cards:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get all customer cards
 *     responses:
 *       200:
 *         description: List of all customer cards
 *       500:
 *         description: Server error
 */
CustomerCardRoutes.get("/customer_cards", customerCardController.getAllCustomerCards);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get a customer card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer card details
 *       404:
 *         description: Customer card not found
 *       500:
 *         description: Server error
 */
CustomerCardRoutes.get("/customer_cards/:id", customerCardController.getCustomerCardById);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   put:
 *     tags: [CustomerCard]
 *     summary: Update a customer card by ID
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
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: number
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Customer card updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer card not found
 *       500:
 *         description: Server error
 */
CustomerCardRoutes.put("/customer_cards/:id", customerCardController.updateCustomerCard);

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   delete:
 *     tags: [CustomerCard]
 *     summary: Delete a customer card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Customer card deleted successfully
 *       404:
 *         description: Customer card not found
 *       500:
 *         description: Server error
 */
CustomerCardRoutes.delete("/customer_cards/:id", customerCardController.deleteCustomerCard);

module.exports = CustomerCardRoutes;
