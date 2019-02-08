var mysql = require('mysql');
var connectionOnline = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi'
});

exports.listExchange = function (req, res, next) {
    connectionOnline.query("SELECT idExchange, user.idUser, user.url, user.firstname, user.lastname, usercard.idusercard, validUser, validOtherUser FROM exchange, user, usercard WHERE exchange.user_idUser = user.idUser AND exchange.user_idOtherUser = user.idUser AND exchange.userCard_idUserCard = usercard.idusercard AND exchange.userCard_idUserCard = usercard.idusercard", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}