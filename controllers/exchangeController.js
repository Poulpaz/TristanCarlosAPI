var mysql = require('mysql');
var connectionOnline = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi'
});

exports.listExchange = function (req, res, next) {
    var idUser = req.param.idUser
    connectionOnline.query("SELECT * FROM exchange WHERE idUser = '" + idUser + "' OR idOtherUser = '" + idUser + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}