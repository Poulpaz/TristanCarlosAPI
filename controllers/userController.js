var mysql = require('mysql');
var connectionOnline = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi',
    port: '3307'
});

exports.listUser = function (req, res, next) {
    connectionOnline.query("SELECT * FROM user", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}

exports.userWithToken = function (req, res, next) {
    var token = req.headers.token;
    var row;
    connectionOnline.query("SELECT * FROM user WHERE token=" + token + " LIMIT 1", function (err, result, fields) {
        if (err) { throw err; }
        else {
            Object.keys(result).forEach(function (key) { row = result[key]; });
            if(row != null) { res.json( { code: 200, user: { idUser: row.idUser, lastname: row.lastname, firstname: row.firstname, wallet: row.wallet, url: row.url }, token: row.token } ); }
            else { res.json( { code: 1, user: null, token: null } ); }
        }
    });
}

exports.addNewUser = function (req, res, next) {
    var token = req.body.token;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var wallet = req.body.wallet;
    var url = req.body.url;
    connectionOnline.query("INSERT INTO user (token, firstname, lastname, wallet, url) VALUES ('" + token + "', '" + firstname + "', '" + lastname + "', '" + wallet + "', '" + url + "')", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "Inscription effectuée avec succès." }); }
    });
}

exports.deleteUser = function (req, res, next) {
    var token = req.headers.token;
    connectionOnline.query("DELETE FROM user WHERE token=" + token + "", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "Compte supprimé avec succès." }); }
    });
}

exports.updateUser = function (req, res, next) {
    var token = req.headers.token
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var wallet = req.body.wallet;
    var imageUrl = req.body.url;
    connectionOnline.query("UPDATE user SET firstname='" + firstname + "', lastname='" + lastname + "', wallet='" + wallet + "', url='" + imageUrl + "' WHERE token=" + token + "", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json({ message: "Vos informations personnelles ont bien été mises à jour." }); }
    });
}