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
        if (err) {
            throw err;
        } else {
            Object.keys(result).forEach(function (key) {
                var row = result[key];
                console.log(row.libelle + " " + row.surname + " " + row.name);
            });
            res.json(result);
        }
    });
}

exports.getAllUserCardWithToken = function (req, res, next) {
    var token = req.params.token;

    connectionOnline.query("SELECT card_idcard FROM usercard, user WHERE usercard.user_iduser=user.idUser AND user.token=" + token + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            Object.keys(result).forEach(function (key) {
                var row = result[key];
                console.log(row.card_idcard);
            });
        }
        res.json(result);
    });
}

exports.updateUserCard = function (req, res, next) {
    var idOldUser = req.body.olduser;
    var user_idUser = req.body.user;
    var card_idCard = req.body.card;
    connectionOnline.query("UPDATE usercard SET user_iduser='" + user_idUser + "' WHERE user_iduser='" + idOldUser + "' AND card_idcard='" + card_idCard + "'", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("UserCard has updated into table ! :)");
        }
    });
}

exports.addNewUserCard = function (req, res, next) {
    var user_idUser = req.body.user;
    var card_idCard = req.body.card;
    connectionOnline.query("INSERT INTO usercard (user_iduser, card_idcard) VALUES ('" + user_idUser + "', '" + card_idCard + "')", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("UserCard has inserted into table ! :)");
        }
    });
}

exports.deleteUserCard = function (req, res, next) {
    var user_idUser = req.body.user;
    var card_idCard = req.body.card;
    connectionOnline.query("DELETE FROM usercard WHERE user_iduser=" + user_idUser + " AND card_idcard=" + card_idCard + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("UserCard has deleted from table usercard ! :)");
        }
    });
}