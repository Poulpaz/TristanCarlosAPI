var mysql = require('mysql');
var connection = mysql.createConnection({
  // properties ...
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'tristancarlosapi'
});

exports.listCard = function(req, res, next) {
var response = [];
    connection.query("SELECT * FROM card", function(err, result, fields) {
        if(err) {
            throw err;
        } else {
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                console.log(row.libelle);
            });
            res.json(result);
        }
    });
}