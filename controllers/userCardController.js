var connection = require('../connection/connection');
var connectionOnline = connection.connectionOnline;

exports.listUserCard = function (req, res, next) {
    connectionOnline.query("SELECT * FROM usercard, user WHERE usercard.user_iduser=user.idUser", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}

exports.getAllUserCardsWithId = function (req, res, next) {
    var id = req.params.id;
    connectionOnline.query("SELECT card_idcard FROM usercard, user WHERE user.idUser = user_iduser AND user_iduser= " + id + "", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}

exports.updateUserCard = function (req, res, next) {
    var idNewCard = req.body.idNewCard;
    var idOldCard = req.body.idOldCard;
    var idUser = req.body.idUser;
    connectionOnline.query("UPDATE usercard SET card_idcard='" + idNewCard + "' WHERE user_iduser='" + idUser + "' AND card_idcard='" + idOldCard + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "Le possesseur a été mis à jour." }); }
    });
}

exports.addNewUserCard = function (req, res, next) {
    var user_idUser = req.body.idUser;
    var card_idCard = req.body.idCard;
    connectionOnline.query("INSERT INTO usercard (user_iduser, card_idcard) VALUES ('" + user_idUser + "', '" + card_idCard + "')", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "La carte a été acquise." }); }
    });
}

exports.deleteUserCard = function (req, res, next) {
    var user_idUser = req.body.idUser;
    var card_idCard = req.body.idCard;
    connectionOnline.query("DELETE FROM usercard WHERE user_iduser='" + user_idUser + "' AND card_idcard='" + card_idCard + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "La possession a été supprimée." }); }
    });
}