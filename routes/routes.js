module.exports = function (app) {

    console.log("route")

    var cardController = require('../controllers/cardController');
    var userController = require('../controllers/userController');
    var userCardController = require('../controllers/userCardController');
    var exchangeController = require('../controllers/exchangeController');
    var conversationController = require('../controllers/conversationController');

    /* Routes test - debug */

    app.route('/test').get(function (req, res, next) {
        console.log("Hello")        
        res.send("Hello Heroku. API is working... You can begin to use it !")
    })

    /* Routes cards */

    //Get every cards + Heroku - home/shop
    app.route('/api/cardsFromShop').get(cardController.listCard);

    //Get only one card per id + Heroku - home/shop -
    app.route('/api/detailsCard/:id').get(cardController.cardWithId);


    /* Routes userCards */

    //Get every cards per one user (with token)
    app.route('/api/getAllUserCardsWithId/:id').get(userCardController.getAllUserCardsWithId);

    //Get all cards from userCard
    app.route('/api/listUserCard').get(userCardController.listUserCard);

    //Update a card in userCard table - Exchange
    app.route('/api/updateUserCard').put(userCardController.updateUserCard);

    //Add a card associated to an user in userCard
    app.route('/api/addNewUserCard').post(userCardController.addNewUserCard);

    //Delete a card in userCard with idUser and idCard
    app.route('/api/deleteUserCard').post(userCardController.deleteUserCard);


    /* Routes users */

    //Get every users
    app.route('/api/users').get(userController.listUser);

    //Get only one user per token + Heroku
    app.route('/api/registeredUser').get(userController.userWithToken);

    //Add a new user with specifies
    app.route('/api/registerUser').post(userController.addNewUser);

    //Delete an user with token
    app.route('/api/deleteUser').delete(userController.deleteUser);

    //Update an user with token and specifies
    app.route('/api/updateUser').put(userController.updateUser);


    /* Routes exchange */

    //Get one exchange
    app.route('/api/exchange/:idExchange').get(exchangeController.exchange);

    //Get every exchange
    app.route('/api/exchanges/:id').get(exchangeController.listExchange);

    //Add a new exchange with specifies
    app.route('/api/addExchange').post(exchangeController.addNewExchange);

    //Update an exchange with specifies
    app.route('/api/updateExchange').put(exchangeController.updateExchange);

    //Delete an exchange
    app.route('/api/deleteExchange/:idExchange').delete(exchangeController.deleteExchange);


    /* Routes conversation / message */

    //Get every messages into a conversation
    app.route('/api/messenger/messages/:idConversation').get(conversationController.listMessageIntoConversation);

    //Get every conversations for an user
    app.route('/api/messenger/conversation/:idUser').get(conversationController.listConversation);

    //Get every messages
    app.route('/api/messenger/getAllMessages').get(conversationController.listMessage);

};