/**
 * author:Kazi tanvir azad
 */

/**
 * importing mysql module to the project
 */
const mysql = require('mysql');

/**
* Creating a mysql pool
* objct with its reference
*/
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    database: 'hotel_management_project_2',
    port: 3306,
    user: 'kazihotel',
    password: 'kazi@Hotel',
    timezone: 'utc'
});

/**
 * exporting the pool as module
 */
module.exports = pool;