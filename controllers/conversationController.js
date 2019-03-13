var connection = require('../connection/connection');
var connectionOnline = connection.connectionOnline;

/* Region conversation - message */

exports.listMessageIntoConversation = function (req, res, next) {
    idConversation = req.params.idConversation;
    connectionOnline.query("SELECT idMessage, idUserMessage, messageContent, sendDate FROM message, conversation WHERE message.conversation_idConversation = conversation.idConversation AND conversation.idConversation='" + idConversation + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}

exports.newMessage = function (req, res, next) {
    var conversation_idConversation = req.body.idConversation;
    var idUserMessage = req.body.idUserMessage;
    var messageContent = req.body.messageContent;
    var sendDate = req.body.sendDate;
    connectionOnline.query("INSERT INTO message (conversation_idConversation, idUserMessage, messageContent, sendDate) VALUES ('" + conversation_idConversation + "', '" + idUserMessage + "', '" + messageContent + "', '" + sendDate + "')", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json( { "message": "Message transmis avec succès." } ); }
    });
}

exports.deleteMessage = function (req, res, next) {
    var idMessage = req.params.idMessage;
    connectionOnline.query("DELETE FROM message WHERE idMessage='" + idMessage + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json( { "message": "Message supprimé avec succès." } ); }
    });
}

/* Region conversation */

exports.listConversation = function (req, res, next) {
    var idUser = req.params.idUser;
    connectionOnline.query("SELECT * FROM conversation WHERE idUser='" + idUser + "' OR idOtherUser='" + idUser + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json(result); }
    });
}

exports.newConversation = function (req, res, next) {
    var idUser = req.body.idUser;
    var idOtherUser = req.body.idOtherUser;
    connectionOnline.query("INSERT INTO conversation (idUser, idOtherUser) VALUES ('" + idUser + "', '" + idOtherUser + "')", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json( { "message": "Conversation ajoutée avec succès." } ); }
    });
}

exports.deleteConversation = function (req, res, next) {
    var idConversation = req.params.idConversation;
    connectionOnline.query("DELETE FROM conversation WHERE idConversation='" + idConversation + "'", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json( { "message": "Conversation supprimée avec succès." } ); }
    });
}


/* Region messages */

exports.listMessage = function (req, res, next) {
    connectionOnline.query("SELECT * FROM message", function (err, result, fields) {
        if (err) { throw err; }
        else { res.json( { "messages": result } ); }
    });
}