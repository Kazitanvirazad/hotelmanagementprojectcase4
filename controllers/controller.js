/**
 * author:Kazi tanvir azad
 */

/**
 * importing customer model to the controller
 */
const Customer = require('../modules/customer.model.js');

/**
 * importing bookings model to the controller
 */
const Bookings = require('../modules/booking.model.js');

/**
 * Function to response to the request
 * and responds with JSON data for 
 * bookings made by a customer
 * with a registered phone number
 * @param {HTTP REQUEST OBJECT} req 
 * @param {HTTP RESPONSE OBJECT} res 
 */
let getBookingList = (req, res) => {
    try {
        Customer.getBookingList(req.query.phone, (error, result, fields) => {
            if (error) throw error;
            res.json(getBookingJSON(result, result.length));
            // console.log(req.query.phone);
            // console.log(result);
        });
    } catch (error) {
        console.log("Something went wrong: " + error);
        res.json(getBookingJSON(result, 0));
    }

};

/**
 * Function to response to the request
 * and responds by rendering/sending
 * view for the invoice of a selected
 * booking number
 * @param {HTTP REQUEST OBJECT} req 
 * @param {HTTP RESPONSE OBJECT} res 
 */
let getInvoiceData = (req, res) => {
    try {
        Bookings.getInvoiceData(req.query.bookId, (error, result, fields) => {
            if (error) throw error;
            // console.log(req.query.bookId);
            let data = getInvoiceJSON(result);
            res.render('invoiceTemplate', { layout: 'invoice', data: data });
            // console.log(data);
            // res.json(data);
        });
    } catch (error) {
        res.render('errorTemplate', { layout: 'invoice' });
    }

};

/**
 * This function processes MySQL
 * result data and converts into
 * custom JSON data for invoice ready to 
 * send as response from the server 
 * @param {MySQL result} data 
 * @returns JSON
 */
function getInvoiceJSON(data) {
    let service = [];
    for (let val of data) {
        service.push({ servtype: val.servtype, service_rate: val.service_rate });
    }
    delete data[0].servtype;
    delete data[0].service_rate;

    return { data: data[0], service: service };
}

/**
 * This function processes MySQL
 * result data and converts into
 * custom JSON data for bookings list
 * of a registered customer
 * @param {MySQL result} data 
 * @param {MySQL result row count} num_of_rows 
 * @returns JSON
 */
function getBookingJSON(data, num_of_rows) {
    if (num_of_rows > 0) {
        let book_details = [];
        for (let val of data) {
            book_details.push({ book_id: val.book_id, checkin: val.checkin, checkout: val.checkout });
        }
        return {
            status: 1,
            f_name: data[0].f_name,
            l_name: data[0].l_name,
            book_details: book_details
        };
    } else {
        return { status: 0 };
    }
}

/**
 * exporting the controllers as module
 */
module.exports = { getBookingList, getInvoiceData };