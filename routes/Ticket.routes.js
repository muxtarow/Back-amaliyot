const express = require("express");
const TicketRoutes = express.Router();
const ticketController = require("../controller/TicketController");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket management
 */

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: number
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
TicketRoutes.post("/tickets", ticketController.createTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all tickets
 *     responses:
 *       200:
 *         description: List of all tickets
 *       500:
 *         description: Server error
 */
TicketRoutes.get("/tickets", ticketController.getAllTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get a ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
TicketRoutes.get("/tickets/:id", ticketController.getTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update a ticket by ID
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
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: number
 *     responses:
 *       200:
 *         description: Ticket updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
TicketRoutes.put("/tickets/:id", ticketController.updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete a ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Ticket deleted successfully
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
TicketRoutes.delete("/tickets/:id", ticketController.deleteTicket);

module.exports = TicketRoutes;
