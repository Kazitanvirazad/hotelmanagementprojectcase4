/**
 * author:Kazi tanvir azad
 */

/**
 * Function to response to the request
 * The Home page layout is sent/rendered as a 
 * response
 * @param {HTTP REQUEST OBJECT} req 
 * @param {HTTP RESPONSE OBJECT} res 
 */
let getHomePage = (req, res) => {
    res.render('home-body', { layout: 'home' });
};

/**
 * Function to response to the request 
 * The maharaja suite page is sent/rendered as a
 * response
 */
let getMaharaja = (req, res) => {
    res.render('maharaja-body', { layout: 'maharaja' });
};


/**
 * Function to response to the request 
 * The maharaja suite page is sent/rendered as a
 * response
 * @param {HTTP REQUEST OBJECT} req 
 * @param {HTTP RESPONSE OBJECT} res 
 */
let getPremium = (req, res) => {
    res.render('premium-body', { layout: 'premium' });
};


/**
 * Function to response to the request 
 * The luxury suite page is sent/rendered as a
 * response
 * @param {HTTP REQUEST OBJECT} req 
 * @param {HTTP RESPONSE OBJECT} res 
 */
let getLuxury = (req, res) => {
    res.render('luxury-body', { layout: 'luxury' });
};

/**
 * Function to response to the request
 * The Form page layout is sent/rendered as a 
 * response
 * @param {HTTP REQUEST OBJECT} req 
 * @param {HTTP RESPONSE OBJECT} res 
 */
let getAccountPage = (req, res) => {
    res.render('formPhoneValidation', { layout: 'account' });
};


/**
 * Function to response to the request
 * The business executive page is sent/rendered as a 
 * response
 * @param {HTTP REQUEST OBJECT} req 
 * @param {HTTP RESPONSE OBJECT} res 
 */
let getBusiness = (req, res) => {
    res.render('business-body', { layout: 'business' });
};

/**
 * exporting the view controllers as module
 */
module.exports = { getHomePage, getAccountPage, getMaharaja, getPremium, getLuxury, getBusiness };