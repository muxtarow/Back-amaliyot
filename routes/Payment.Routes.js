const express = require("express");
const PaymentRoutes = express.Router();
const paymentController = require("../controller/PaymentController");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment method management
 */

/**
 * @swagger
 * /api/payments:
 *   post:
 *     tags: [Payment]
 *     summary: Create a new payment method
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
 *         description: Payment method created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
PaymentRoutes.post("/payments", paymentController.createPayment);

/**
 * @swagger
 * /api/payments:
 *   get:
 *     tags: [Payment]
 *     summary: Get all payment methods
 *     responses:
 *       200:
 *         description: List of all payment methods
 *       500:
 *         description: Server error
 */
PaymentRoutes.get("/payments", paymentController.getAllPayments);

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     tags: [Payment]
 *     summary: Get a payment method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Payment method details
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
PaymentRoutes.get("/payments/:id", paymentController.getPaymentById);

/**
 * @swagger
 * /api/payments/{id}:
 *   put:
 *     tags: [Payment]
 *     summary: Update a payment method by ID
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
 *         description: Payment method updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
PaymentRoutes.put("/payments/:id", paymentController.updatePayment);

/**
 * @swagger
 * /api/payments/{id}:
 *   delete:
 *     tags: [Payment]
 *     summary: Delete a payment method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Payment method deleted successfully
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
PaymentRoutes.delete("/payments/:id", paymentController.deletePayment);

module.exports = PaymentRoutes;
