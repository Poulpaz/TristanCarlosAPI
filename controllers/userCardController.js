var mysql = require('mysql');
var https = require('https');
var connectionOnline = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi'
});

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
    var user_idUser_old = req.headers;
    var user_idUser = req.body.idUser;
    var card_idCard = req.body.idCard;
    connectionOnline.query("UPDATE usercard SET user_iduser='" + user_idUser + "' WHERE user_iduser='" + user_idUser_old + "' AND card_idcard='" + card_idCard + "'", function (err, result, fields) {
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