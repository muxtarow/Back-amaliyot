const express = require("express");
const DiscountRoutes = express.Router();
const discountController = require("../controller/DiscountController");

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount management
 */

/**
 * @swagger
 * /api/discounts:
 *   post:
 *     tags: [Discount]
 *     summary: Create a new discount
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: number
 *               finish_date:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Discount created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
DiscountRoutes.post("/discounts", discountController.createDiscount);

/**
 * @swagger
 * /api/discounts:
 *   get:
 *     tags: [Discount]
 *     summary: Get all discounts
 *     responses:
 *       200:
 *         description: List of all discounts
 *       500:
 *         description: Server error
 */
DiscountRoutes.get("/discounts", discountController.getAllDiscounts);

/**
 * @swagger
 * /api/discounts/{id}:
 *   get:
 *     tags: [Discount]
 *     summary: Get a discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Discount details
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
DiscountRoutes.get("/discounts/:id", discountController.getDiscountById);

/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     tags: [Discount]
 *     summary: Update a discount by ID
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
 *               discount:
 *                 type: number
 *               finish_date:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Discount updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
DiscountRoutes.put("/discounts/:id", discountController.updateDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     tags: [Discount]
 *     summary: Delete a discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Discount deleted successfully
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
DiscountRoutes.delete("/discounts/:id", discountController.deleteDiscount);

module.exports = DiscountRoutes;
