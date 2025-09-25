const express = require("express");
const CartItemRoutes = express.Router();
const CartItemController = require("../controller/CartItemController");
/**
 * @swagger
 * tags:
 *   name: CartItem
 *   description: Cart management
 */

/**
 * @swagger
 * /api/cartItem:
 *   post:
 *     tags: [CartItem]
 *     summary: Create a new cartItem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: cartItem created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
CartItemRoutes.post("/cartItem", CartItemController.createCartItem);
/**
 * @swagger
 * /api/cartItem:
 *   get:
 *     tags: [CartItem]
 *     summary: Get all cartItem
 *     responses:
 *       200:
 *         description: List of cartItem
 *       500:
 *         description: Server error
 */
CartItemRoutes.get("/cartItem", CartItemController.getAllCartItems);

/**
 * @swagger
 * /api/cartItem/{id}:
 *   get:
 *     tags: [CartItem]
 *     summary: Get cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
CartItemRoutes.get("/cartItem/:id", CartItemController.getCartItemById);


/**
 * @swagger
 * /api/cartItem/{id}:
 *   put:
 *     tags: [CartItem]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cart updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
CartItemRoutes.put("/cartItem/:id", CartItemController.updateCartItem);

/**
 * @swagger
 * /api/cartItem/{id}:
 *   delete:
 *     tags: [CartItem]
 *     summary: Delete cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       204:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
CartItemRoutes.delete("/cartItem/:id", CartItemController.deleteCartItem);

module.exports = CartItemRoutes;
