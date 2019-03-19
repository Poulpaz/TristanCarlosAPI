var connection = require('../connection/connection');
var connectionOnline = connection.connectionOnline;

//Instancier le contrôleur de notifications
var notificationController = require('../controllers/notificationController');

exports.exchange = function (req, res, next) {
    var idExchange = req.params.idExchange
    connectionOnline.query("SELECT * FROM exchange WHERE idExchange =" + idExchange + " LIMIT 1 ", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result[0]); }
    });
}

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
    connectionOnline.query("INSERT INTO exchange (idUser, idOtherUser, cardUser, cardOtherUser, validUser, validOtherUser) VALUES (?,?,?,?,?,?)", [idUser, idOtherUser, cardUser, cardOtherUser, validUser, validOtherUser], function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "L'échange à bien été initialisé." }); }
    });
    notificationExchange();
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
    var idExchange = req.params.idExchange;
    connectionOnline.query("DELETE FROM exchange WHERE idExchange='" + idExchange + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "Echange supprimé avec succès." }); }
    });
}

//Notifier l'utilisateur d'un nouvel échange
function notificationExchange() {
    connectionOnline.query("SELECT idExchange, idOtherUser FROM exchange ORDER BY idExchange DESC LIMIT 1", function (err, result, fields) {
        if (err) { throw err; }
        else {
            Object.keys(result).forEach(function (key) {
                rowIdExchange = result[key].idExchange;
                rowIdOtherUser = result[key].idOtherUser;
            });
            notificationController.notificationMessage(rowIdExchange, rowIdOtherUser);
        }
    });
}