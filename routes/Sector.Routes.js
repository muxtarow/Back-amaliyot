const express = require("express");
const SectorRoutes = express.Router();
const sectorController = require("../controller/sectorController");

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sektorlar bilan ishlash
 */

/**
 * @swagger
 * /api/sectors:
 *   post:
 *     tags: [Sector]
 *     summary: Yangi sektor yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sektor yaratildi
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       500:
 *         description: Server xatosi
 */
SectorRoutes.post("/sectors", sectorController.createSector);

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     tags: [Sector]
 *     summary: Barcha sektorlarni olish
 *     responses:
 *       200:
 *         description: Sektorlar ro‘yxati
 *       500:
 *         description: Server xatosi
 */
SectorRoutes.get("/sectors", sectorController.getAllSectors);

/**
 * @swagger
 * /api/sectors/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Sektorni ID bo‘yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sektor ID
 *     responses:
 *       200:
 *         description: Sektor ma’lumotlari
 *       404:
 *         description: Sektor topilmadi
 *       500:
 *         description: Server xatosi
 */
SectorRoutes.get("/sectors/:id", sectorController.getSectorById);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     tags: [Sector]
 *     summary: Sektorni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sektor ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sektor yangilandi
 *       404:
 *         description: Sektor topilmadi
 *       500:
 *         description: Server xatosi
 */
SectorRoutes.put("/sectors/:id", sectorController.updateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     tags: [Sector]
 *     summary: Sektorni o‘chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sektor ID
 *     responses:
 *       200:
 *         description: Sektor o‘chirildi
 *       404:
 *         description: Sektor topilmadi
 *       500:
 *         description: Server xatosi
 */
SectorRoutes.delete("/sectors/:id", sectorController.deleteSector);

module.exports = SectorRoutes;
