const express = require("express");
const TicketTypeRoutes = express.Router();
const TicketTypeController = require("../controller/ticketypeController");

/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: Ticket Type management
 */

/**
 * @swagger
 * /api/ticket_types:
 *   post:
 *     tags: [TicketType]
 *     summary: Create a new ticket type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket type created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
TicketTypeRoutes.post("/ticket_types", TicketTypeController.createTicketType);

/**
 * @swagger
 * /api/ticket_types:
 *   get:
 *     tags: [TicketType]
 *     summary: Get all ticket types
 *     responses:
 *       200:
 *         description: List of all ticket types
 *       500:
 *         description: Server error
 */
TicketTypeRoutes.get("/ticket_types", TicketTypeController.getAllTicketTypes);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   get:
 *     tags: [TicketType]
 *     summary: Get a ticket type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ticket type details
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
TicketTypeRoutes.get("/ticket_types/:id", TicketTypeController.getTicketTypeById);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   put:
 *     tags: [TicketType]
 *     summary: Update a ticket type by ID
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
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ticket type updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
TicketTypeRoutes.put("/ticket_types/:id", TicketTypeController.updateTicketType);

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete a ticket type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Ticket type deleted successfully
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
TicketTypeRoutes.delete("/ticket_types/:id", TicketTypeController.deleteTicketType);

module.exports = TicketTypeRoutes;
