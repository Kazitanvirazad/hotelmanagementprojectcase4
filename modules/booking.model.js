/**
 * author:Kazi tanvir azad
 */

/**
 * importing mysql database connection pool
 * module to the bookings model
 */
const pool = require('../config/db.poolconfig');

/**
 * Query the database to get the invoice data from the database
 * for a selected booking number
 * @param {book_id} book_id query parameter
 * @param {callback} callback fn to process the result returned from database 
 */
let getInvoiceData = (book_id, callback) => {
    try {
        pool.getConnection((error, connection) => {
            if (error) throw error;
            connection.query('select bk.book_id, c.cust_id,c.f_name,c.l_name,c.phone,c.email,c.street,c.city,c.state,c.zip,bk.checkin,bk.checkout, rm.room_num,rt.category,rt.rate room_rate, datediff(bk.checkout,bk.checkin) stay_nights,(select roomtype.rate*datediff(bookings.checkout,bookings.checkin) from roomtype, bookings, room where room.room_id=bookings.room_id and room.rt_id=roomtype.rt_id and bookings.book_id = ?) room_total, srv.servtype,srv.rate service_rate,(select sum(rate) from services, bookserv where bookserv.service_id=services.service_id and bookserv.book_id = ?) service_total, p.pay_methd, p.tax, p.discount from payments p, customer c, bookings bk, room rm, roomtype rt,services srv,bookserv bsv where p.book_id=bk.book_id and bk.cust_id=c.cust_id and bsv.book_id=bk.book_id and bk.room_id=rm.room_id and rm.rt_id=rt.rt_id and bsv.service_id=srv.service_id and bk.book_id = ?', [book_id, book_id, book_id], callback);
            connection.release();
        });
    } catch (error) {
        console.log("MySQL Error Occured: " + error);

    }

};

/**
 * exporting the model as a module
 */
module.exports = { getInvoiceData };