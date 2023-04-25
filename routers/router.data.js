/**
 * author:Kazi tanvir azad
 */

/**
 * importing controller module for getting data to the router
 */
const controller = require('../controllers/controller.js');

/**
 * importing express module to the router
 */

const express = require('express');

/**
 * importing express Router module to the project
 */
const router = express.Router();

/**
 * Router for HTTP GET request
 * for getting data for individual
 * customers bookings with 
 * their registered phone number
 */
router.get('/validate', controller.getBookingList);

/**
 * Router for HTTP GET request
 * for getting data for individual
 * customers invoice with 
 * their selected booking number
 */
router.get('/invoice', controller.getInvoiceData);

/**
 * exporting the router as module
 */
module.exports = router;