var mysql = require('mysql');
var connectionOnline = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi'
});

exports.listExchange = function (req, res, next) {
    connectionOnline.query("SELECT * FROM exchange WHERE 1", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}