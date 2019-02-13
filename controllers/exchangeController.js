var mysql = require('mysql');
var connectionOnline = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi'
});

exports.listExchange = function (req, res, next) {
    var idUser = req.params.id
    connectionOnline.query("SELECT * FROM exchange WHERE idUser = '" + idUser + "' OR idOtherUser = '" + idUser + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}

exports.addNewExchange = function (req, res, next) {
    var idUser = req.body.idUser;
    var idOtherUser = req.body.idOtherUser;
    var cardUser = req.body.cardUser;
    var cardOtherUser = req.body.cardOtherUser;
    var validUser = req.body.validUser;
    var validOtherUser = req.body.validOtherUser;
    connectionOnline.query("INSERT INTO exchange (idUser, idOtherUser, cardUser, cardOtherUser, validUser, validOtherUser) VALUES ('" + idUser + "', '" + idOtherUser + "', '" + cardUser + "', '" + cardOtherUser + "', '" + validUser + "', '" + validOtherUser + "') IF NOT EXISTS", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "L'échange à bien été initialisé." }); }
    });
}

exports.updateExchange = function (req, res, next) {
    var idExchange = req.body.idExchange;
    var idUser = req.body.idUser;
    var idOtherUser = req.body.idOtherUser;
    var cardUser = req.body.cardUser;
    var cardOtherUser = req.body.cardOtherUser;
    var validUser = req.body.validUser;
    var validOtherUser = req.body.validOtherUser;
    connectionOnline.query("UPDATE exchange SET idUser='" + idUser + "', idOtherUser='" + idOtherUser + "', cardUser='" + cardUser + "', cardOtherUser='" + cardOtherUser + "', validUser='" + validUser + "', validOtherUser='" + validOtherUser + "' WHERE idExchange='" + idExchange + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "L'échange à bien été mis à jour." }); }
    });
}

exports.deleteExchange = function (req, res, next) {
    var idExchange = req.body.idExchange;
    connectionOnline.query("DELETE FROM exchange WHERE idExchange=" + idExchange + "", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "Echange supprimé avec succès." }); }
    });
}