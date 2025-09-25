const express = require("express");
const EventTypeRoutes = express.Router();
const eventTypeController = require("../controller/EventTypeController");

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: Event Type management
 */

/**
 * @swagger
 * /api/event-types:
 *   post:
 *     tags: [EventType]
 *     summary: Create a new event type
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
 *         description: Event type created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
EventTypeRoutes.post("/event-types", eventTypeController.createEventType);

/**
 * @swagger
 * /api/event-types:
 *   get:
 *     tags: [EventType]
 *     summary: Get all event types
 *     responses:
 *       200:
 *         description: List of all event types
 *       500:
 *         description: Server error
 */
EventTypeRoutes.get("/event-types", eventTypeController.getAllEventTypes);

/**
 * @swagger
 * /api/event-types/{id}:
 *   get:
 *     tags: [EventType]
 *     summary: Get an event type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Event type details
 *       404:
 *         description: Event type not found
 *       500:
 *         description: Server error
 */
EventTypeRoutes.get("/event-types/:id", eventTypeController.getEventTypeById);

/**
 * @swagger
 * /api/event-types/{id}:
 *   put:
 *     tags: [EventType]
 *     summary: Update an event type by ID
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
 *         description: Event type updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event type not found
 *       500:
 *         description: Server error
 */
EventTypeRoutes.put("/event-types/:id", eventTypeController.updateEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   delete:
 *     tags: [EventType]
 *     summary: Delete an event type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Event type deleted successfully
 *       404:
 *         description: Event type not found
 *       500:
 *         description: Server error
 */
EventTypeRoutes.delete("/event-types/:id", eventTypeController.deleteEventType);

module.exports = EventTypeRoutes;
