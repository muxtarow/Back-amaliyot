const express = require("express");
const venuePhoto = express.Router();
const venuePhotoController = require("../controller/venue.photoController");

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: Venue rasmlari bilan ishlash
 */

/**
 * @swagger
 * /api/venue-photos:
 *   post:
 *     tags: [VenuePhoto]
 *     summary: Yangi venue photo yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venue photo yaratildi
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       500:
 *         description: Server xatosi
 */
venuePhoto.post("/venue-photos", venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/venue-photos:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Barcha venue photos larni olish
 *     responses:
 *       200:
 *         description: Venue photos ro‘yxati
 *       500:
 *         description: Server xatosi
 */
venuePhoto.get("/venue-photos", venuePhotoController.getAllVenuePhotos);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Venue photo ni ID bo‘yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue photo ID
 *     responses:
 *       200:
 *         description: Venue photo ma’lumotlari
 *       404:
 *         description: Venue photo topilmadi
 *       500:
 *         description: Server xatosi
 */
venuePhoto.get("/venue-photos/:id", venuePhotoController.getVenuePhotoById);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Venue photo ni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Venue photo yangilandi
 *       404:
 *         description: Venue photo topilmadi
 *       500:
 *         description: Server xatosi
 */
venuePhoto.put("/venue-photos/:id", venuePhotoController.updateVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Venue photo ni o‘chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue photo ID
 *     responses:
 *       200:
 *         description: Venue photo o‘chirildi
 *       404:
 *         description: Venue photo topilmadi
 *       500:
 *         description: Server xatosi
 */
venuePhoto.delete("/venue-photos/:id", venuePhotoController.deleteVenuePhoto);

module.exports = venuePhoto;
