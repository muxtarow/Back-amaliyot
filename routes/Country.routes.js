const express = require("express");
const CountryRoutes = express.Router();
const countryController = require("../controller/CountryController");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

/**
 * @swagger
 * /api/country:
 *   post:
 *     tags: [Country]
 *     summary: Create a new country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Uzbekistan"
 *     responses:
 *       201:
 *         description: Country created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
CountryRoutes.post("/country", countryController.createCountry);

/**
 * @swagger
 * /api/country:
 *   get:
 *     tags: [Country]
 *     summary: Get all countries
 *     responses:
 *       200:
 *         description: List of all countries
 *       500:
 *         description: Server error
 */
CountryRoutes.get("/country", countryController.getAllCountries);

/**
 * @swagger
 * /api/country/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get a country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Country details
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
CountryRoutes.get("/country/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/country/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update a country by ID
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
 *                 example: "Kazakhstan"
 *     responses:
 *       200:
 *         description: Country updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
CountryRoutes.put("/country/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete a country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Country deleted successfully
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
CountryRoutes.delete("/country/:id", countryController.deleteCountry);

module.exports = CountryRoutes;
