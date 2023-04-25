/**
 * author:Kazi tanvir azad
 */

/**
 * importing mysql database connection pool
 * module to the customer model
 */
const pool = require('../config/db.poolconfig');

/**
 * Query the database to get a customers bookings 
 * done in the hotel, using registered phone number
 * @param {phone} phone  query parameter
 * @param {callback} callback fn to process the result returned from database 
 */
let getBookingList = (phone, callback) => {
    try {
        pool.getConnection((error, connection) => {
            if (error) throw error;
            connection.query(`SELECT bk.book_id, c.f_name,c.l_name,bk.checkin,bk.checkout FROM bookings bk, 
            customer c WHERE bk.cust_id=c.cust_id AND c.cust_id IN (SELECT cust_id FROM customer WHERE phone = ?)`, [phone], callback);
            connection.release();
        });
    } catch (error) {
        console.log("MySQL Error Occured: " + error);
    }

};

/**
 * exporting the model as a module
 */
module.exports = { getBookingList };