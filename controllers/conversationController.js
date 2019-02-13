var mysql = require('mysql');
var connectionOnline = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi'
});

/* Region conversation - message */

exports.listMessageIntoConversation = function (req, res, next) {
    idConversation = req.params.idConversation;
    connectionOnline.query("SELECT idMessage, conversation_idConversation, idUserMessage, messageContent, sendDate FROM message, conversation WHERE message.conversation_idConversation = conversation.idConversation AND conversation.idConversation='" + idConversation + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json( { "messages": result } ); }
    });
}

/* Region conversation */

exports.listConversation = function (req, res, next) {
    var idUser = req.params.idUser;
    connectionOnline.query("SELECT * FROM conversation WHERE idUser='" + idUser + "' OR idOtherUser='" + idUser + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json( { "conversations": result } ); }
    });
}


/* Region messages */

exports.listMessage = function (req, res, next) {
    connectionOnline.query("SELECT * FROM message", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json( { "messages": result } ); }
    });
}