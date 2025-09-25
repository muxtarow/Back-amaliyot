const express = require("express");
const CustomerAddressRoutes = express.Router();
const customerAddressController = require("../controller/customeraddressController");

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: Customer Address management
 */

/**
 * @swagger
 * /api/customer_address:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create a new customer address
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               home:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               landmark:
 *                 type: string
 *               postal_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer address created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
CustomerAddressRoutes.post("/customer_address", customerAddressController.createCustomerAddress);

/**
 * @swagger
 * /api/customer_address:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all customer addresses
 *     responses:
 *       200:
 *         description: List of all customer addresses
 *       500:
 *         description: Server error
 */
CustomerAddressRoutes.get("/customer_address", customerAddressController.getAllCustomerAddresses);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get a customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer address details
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server error
 */
CustomerAddressRoutes.get("/customer_address/:id", customerAddressController.getCustomerAddressById);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   put:
 *     tags: [CustomerAddress]
 *     summary: Update a customer address by ID
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               home:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               landmark:
 *                 type: string
 *               postal_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer address updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server error
 */
CustomerAddressRoutes.put("/customer_address/:id", customerAddressController.updateCustomerAddress);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete a customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Customer address deleted successfully
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server error
 */
CustomerAddressRoutes.delete("/customer_address/:id", customerAddressController.deleteCustomerAddress);

module.exports = CustomerAddressRoutes;
