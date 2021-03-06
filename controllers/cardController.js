var mysql = require('mysql');
var https = require('https');

/* Get all cards on external API */
exports.listCard = function (req, res, next) {
    var option = "https://api.elderscrollslegends.io/v1/cards";
    var data = "";
    var request = https.get(option, (result) => {
        result.on('data', (d) => { data += d; });
        result.on('end', function () {
            var cards = JSON.parse(data);
            res.json(cards);
        });
    });
    request.on('error', (e) => { console.error(e); });
    request.end();
}

/* Get one card with token on external API */
exports.cardWithId = function (req, res, next) {
    var idcard = req.params.id;
    var option = "https://api.elderscrollslegends.io/v1/cards/" + idcard;
    var data = "";
    var request = https.get(option, (result) => {
        result.on('data', (d) => { data += d; });
        result.on('end', function () {
            var card = JSON.parse(data);
            res.json(card);
        });
    });
    request.on('error', (e) => { console.error(e); });
    request.end();
}