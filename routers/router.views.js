/**
 * author:Kazi tanvir azad
 */

/**
 * importing express module to the router
 */
const express = require('express');

/**
 * importing controller module for views to the router
 */
const controller = require('../controllers/view.controller.js');

/**
 * importing express Router module to the project
 */
const router = express.Router();

/**
 * Router for HTTP GET request
 * for getting view for homepage
 * as response
 */
router.get('/', controller.getHomePage);

/**
 * Router for HTTP GET request
 * for getting view for Account page
 * as response
 */
router.get('/account', controller.getAccountPage);


/**
 * Router for HTTP GET request
 * for getting view for maharaja suite page
 * as response
 */
router.get('/maharaja', controller.getMaharaja);

/**
 * Router for HTTP GET request
 * for getting view for premium suite page
 * as response
 */
router.get('/premium', controller.getPremium);

/**
* Router for HTTP GET request
* for getting view for luxury suite page
* as response
*/
router.get('/luxury', controller.getLuxury);


/**
* Router for HTTP GET request
* for getting view for business executive page
* as response
*/
router.get('/business', controller.getBusiness);


/**
 * exporting the router as module
 */
module.exports = router;