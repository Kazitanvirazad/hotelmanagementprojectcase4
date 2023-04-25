/**
 * author:Kazi tanvir azad
 */

/**
 * importing express module to the project
 */
const express = require('express');

/**
 * importing router module for getting the data to the project
 */
const router_data = require('./routers/router.data.js');

/**
 * importing router module for getting views to the project
 */
const router_view = require('./routers/router.views.js');

/**
 * importing express-handlebars module to the project
 */
const handlebar = require('express-handlebars');

/**
 * Creating express application
 */
const server = express();

/**
* Setting port number for the server
*/
const PORT = 8088;

/**
 * adding middleware
 * Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
 */
server.use(express.json());

/**
 * adding middleware
 * Returns middleware that parses incoming requests with urlencoded payloads and is based on body-parser.
 * Parameter: The options parameter contains various property like extended, inflate, limit, verify etc.
 * Return Value: It returns an Object.
 */
server.use(express.urlencoded({ extended: true }));

/**
 * adding router middleware in 
 * the project for routing to data controller
 */
server.use('/data', router_data);

/**
 * adding router middleware in 
 * the project for routing to view controller
 */
server.use('/', router_view);

/**
 * Configuring static files for the application
 */
server.use(express.static(__dirname + '/public'));

/**
 * Configuring handlebars
 * in the project 
 */
server.set('view engine', 'hbs');
server.set('views', __dirname + '/views');
server.engine('hbs', handlebar.engine({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',

    /**
     * custom helper functions
     * for handlebar templates
     */
    helpers: {

        /**
         * This function changes the format of 
         * MySQL date to a custom javascript date 
         * format as for example, '26 Apr 2022'
         * @param {MySQL date} date 
         * @returns string 
         */
        generateDate: (date) => {
            let newDate = new Date(date);
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear();
        },

        /**
         * Generates an invoice number with a combibation
         * of booking id + yyyymm from checkout date
         * @param {book_id} book_id 
         * @param {checkout} checkoutDate 
         * @returns string
         */
        generateInvoiceNumber: (book_id, checkoutDate) => {
            let date = new Date(checkoutDate);
            return book_id + "" + date.getFullYear() + "" + (date.getMonth() + 1);
        },

        /**
         * It calculates the addition of total service
         *  charges and total room charges and returns
         * the value as a string
         * @param {total service charges} serviceTotal 
         * @param {total room charges} roomTotal 
         * @returns string
         */
        calculateGrandTotal: (serviceTotal, roomTotal) => {
            return serviceTotal + roomTotal;
        },

        /**
         * Calculates the tax applicable
         * for the total payable amount
         * @param {total service charges} serviceTotal 
         * @param {total room charges} roomTotal 
         * @param {applicable tax percentage} tax_perc 
         * @returns number
         */
        calculateTax: (serviceTotal, roomTotal, tax_perc) => {
            return Math.floor((serviceTotal + roomTotal) * (tax_perc / 100));
        },

        /**
         * Calculates total discount
         * applicable for the payable amount
         * @param {total service charges} serviceTotal 
         * @param {total room charges} roomTotal 
         * @param {applicable discount percentage} disc_perc 
         * @returns number
         */
        calculateDiscount: (serviceTotal, roomTotal, disc_perc) => {
            return Math.floor((serviceTotal + roomTotal) * (disc_perc / 100));
        },

        /**
         * Calculates total payable amount
         * including tax and applied discount
         * @param {total service charges} serviceTotal 
         * @param {total room charges} roomTotal 
         * @param {applicable tax percentage} tax_perc 
         * @param {applicable discount percentage} disc_perc 
         * @returns number
         */
        totalPayable: (serviceTotal, roomTotal, tax_perc, disc_perc) => {
            let tax = (serviceTotal + roomTotal) * (tax_perc / 100);
            let disc = (serviceTotal + roomTotal) * (disc_perc / 100);
            return Math.floor((serviceTotal + roomTotal) + tax - disc);
        }
    }
}));

/**
* Starting express server
* on localhost
*/
server.listen(PORT, 'localhost', (err) => {
    if (err) throw err;
    console.log(`Server started on PORT ${PORT}`);
});

