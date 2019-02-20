var mysql = require('mysql');
var https = require('https');
var async = require('async');
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

exports.fullExchange = function (req, res, next) {
    var user_idUser = req.body.idUser;
    var card_idCard = req.body.idCard;
    var user_idOtherUser = req.body.idOtherUser;
    var card_idOtherCard = req.body.idOtherCard;
    async.parallel({
        one: function (callback) {
            console.log("First request...");
            connectionOnline.query("DELETE FROM usercard WHERE user_iduser='" + user_idUser + "' AND card_idcard='" + card_idCard + "'", function (err, res, body) {
                if (!err && res.statusCode == 200) { callback(null, body); }
                else { callback(true, {}); }
            });
        },
        two: function (callback) {
            console.log("Second request...");
            connectionOnline.query("DELETE FROM usercard WHERE user_iduser='" + user_idOtherUser + "' AND card_idcard='" + card_idOtherCard + "'", function (err, res, body) {
                if (!err && res.statusCode == 200) { callback(null, body); }
                else { callback(true, {}); }
            });
        },
        three: function (callback) {
            console.log("Third request...");
            connectionOnline.query("INSERT INTO usercard (user_iduser, card_idcard) VALUES ('" + user_idUser + "', '" + card_idCard + "')", function (err, res, body) {
                if (!err && res.statusCode == 200) { callback(null, body); }
                else { callback(true, {}); }
            });
        },
        four: function (callback) {
            console.log("Fourth request...");
            connectionOnline.query("INSERT INTO usercard (user_iduser, card_idcard) VALUES ('" + user_idOtherUser + "', '" + card_idOtherCard + "')", function (err, res, body) {
                if (!err && res.statusCode == 200) { callback(null, body); }
                else { callback(true, {}); }
            });
        }
    });
}