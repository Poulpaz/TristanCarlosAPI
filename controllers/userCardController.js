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

    connectionOnline.query("SELECT * FROM usercard, user WHERE usercard.user_iduser=user.iduser AND usercard.card_idcard=card.idcard", function (err, result, fields) {
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

exports.getUserCardWithId = function (req, res, next) {

    var idUserCard = req.params.idUserCard;
    connectionOnline.query("SELECT * FROM usercard, card WHERE usercard.card_idcard=card.idcard AND idusercard=" + idUserCard + "", function (err, result, fields) {
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

exports.updateUserCard = function (req, res, next) {
    var idUserCard = req.body.uc;
    var user_idUser = req.body.user;
    var card_idCard = req.body.card;
    connectionOnline.query("UPDATE usercard SET user_iduser='" + user_idUser + "', card_idcard='" + card_idCard + "' WHERE idusercard=" + idUserCard + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("UserCard has updated into table ! :)");
        }
    });
}

exports.getAllUserCardWithToken = function (req, res, next) {
    var response = [];
    var token = req.params.token;
    connectionOnline.query("SELECT card_idcard FROM usercard, user WHERE usercard.user_iduser=user.iduser AND user.token=" + token
        + "", function (err, result, fields) {
            if (err) {
                throw err;
            } else {
                Object.keys(result).forEach(function (key) {
                    var row = result[key];
                    console.log(row.card_idcard);

                    var option = "https://api.elderscrollslegends.io/v1/cards/" + row.card_idcard;
                    var data = "";
                
                    var request = https.get(option, (result) => {
                        result.on('data', (d) => {
                            data += d;
                        });
                        result.on('end', function () {
                            var card = JSON.parse(data);
                            res.json(card);
                        });
                    });
                    request.on('error', (e) => {
                        console.error(e);
                    });
                    request.end();
                });
                res.json(result);
            }
        });
}