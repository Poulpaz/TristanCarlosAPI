module.exports = function (app) {

    console.log("route")

    var cardController = require('../controllers/cardController');
    var userController = require('../controllers/userController');
    var userCardController = require('../controllers/userCardController');
    var exchangeController = require('../controllers/exchangeController');

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

    //Get every exchange
    app.route('/api/exchanges/:idUser').get(exchangeController.listExchange);
};