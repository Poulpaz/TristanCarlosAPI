var mysql = require('mysql');
var connection = mysql.createConnection({
    // properties
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tristancarlosapi'
});

exports.listCard = function (req, res, next) {
    var response = [];
    connection.query("SELECT * FROM card", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            Object.keys(result).forEach(function (key) {
                var row = result[key];
                console.log(row.libelle);
            });
            res.json(result);
        }
    });
}

exports.cardWithId = function (req, res, next) {
    var response = [];
    var idcard = req.params.id;
    connection.query("SELECT * FROM card WHERE idcard=" + idcard + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            Object.keys(result).forEach(function (key) {
                var row = result[key];
                console.log(row.libelle);
            });
            res.json(result);
        }
    });
}

exports.addNewCard = function (req, res, next) {
    var libelle = req.body.libelle;
    connection.query("INSERT INTO card (libelle) VALUES ('" + libelle + "')", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("Card has inserted into table ! :)");
        }
    });
}

exports.deleteCard = function (req, res, next) {
    var idCard = req.body.idcard;
    connection.query("DELETE FROM card WHERE idcard=" + idCard + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("Card has deleted from table card ! :)");
        }
    });
}

exports.updateCard = function (req, res, next) {
    var idCard = req.body.card;
    var libelle = req.body.libelle;
    connection.query("UPDATE card SET libelle='" + libelle + "' WHERE idcard=" + idCard + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("Card has updated into table ! :)");
        }
    });
}