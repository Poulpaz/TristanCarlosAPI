var admin = require("firebase-admin");
//var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aslyon1-80c44.firebaseio.com"
});

//Notifier les utilisateurs d'un nouvel événement
exports.notificationMessage = function (rowIdConversation, rowIdUser, rowIdOtherUser, rowIdUserMessage, rowMessageContent) {
    
    var topic = null;

    if(rowIdUser == rowIdUserMessage) { var topic = rowIdOtherUser; }
    else { var topic = rowIdUser; }
  
    var payload = {
    notification: {
      title: "Nouveau message",
      body: rowMessageContent
    },
    data: {
      idNotif: String(rowIdConversation),
      type: "message"
    }
  };
  var options = {
    priority: "high"
  }
  
  admin.messaging().sendToTopic(topic, payload, options)
    .then(function(response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
};