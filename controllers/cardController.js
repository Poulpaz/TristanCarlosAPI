var mysql = require('mysql');
var https = require('https');
var connection = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi'
});

exports.listCard = function (req, res, next) {
    var option = "https://api.elderscrollslegends.io/v1/cards";
    var data = "";

    var request = https.get(option, (result) => {
        result.on('data', (d) => {
            data += d;
        });
        result.on('end', function () {
            var cards = JSON.parse(data);
            res.json(cards);
        });
    });
    request.on('error', (e) => {
        console.error(e);
    });
    request.end();
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
    var idCard = req.params.idcard;
    connection.query("DELETE FROM card WHERE idcard=" + idCard + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("Card has deleted from table card ! :)");
        }
    });
}

exports.updateCard = function (req, res, next) {
    var idCard = req.headers.card;
    var libelle = req.body.libelle;
    connection.query("UPDATE card SET libelle='" + libelle + "' WHERE idcard=" + idCard + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("Card has updated into table ! :)");
        }
    });
}