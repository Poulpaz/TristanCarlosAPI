module.exports = function (app) {

    console.log("route")

    var cardController = require('../controllers/cardController');
    var userController = require('../controllers/userController');
    var userCardController = require('../controllers/userCardController');

    /* Routes test - debug */

    app.route('/test').get(function (req, res, next) {
        console.log("Hello")        
        res.send("Hello Heroku. API is working... You can begin to use it !")
    })

    /* Routes cards */

    //Get every cards + Heroku - home/shop
    app.route('/api/cards').get(cardController.listCard);

    //Get only one card per id + Heroku - home/shop -
    app.route('/api/card/:id').get(cardController.cardWithId);


    /*
    //Add a new card that's will be available in shop
    app.route('/api/card').post(cardController.addNewCard);

    //Delete a card from shop
    app.route('/api/card').delete(cardController.deleteCard);

    //Update a card in card table (idCard)
    app.route('/api/card').put(cardController.updateCard);
    */


    /* Routes userCards */

    //Get every cards per one user (with token)
    app.route('/api/user/cards/:token').get(userCardController.getAllUserCardWithToken);

    //Get all cards from userCard
    app.route('/api/user/cards').get(userCardController.listUserCard);

    //Get only one card from userCard
    app.route('/api/user/card/:idUserCard').get(userCardController.getUserCardWithId);

    //Add a card associated to an user in userCard
    app.route('/api/user/card').post(userCardController.addNewUserCard);

    //Delete a card in userCard with idUser and idCard
    app.route('/api/user/card').delete(userCardController.deleteUserCard);

    //Update a card in userCard table (idCard + idUser)
    app.route('/api/user/card').put(userCardController.updateUserCard);


    /* Routes users */

    //Get every users
    app.route('/api/users').get(userController.listUser);

    //Get only one user per token + Heroku
    app.route('/api/user/:token').get(userController.userWithToken);

    //Add a new user with name, surname and age
    app.route('/api/user').post(userController.addNewUser);

    //Delete an user with token
    app.route('/api/user').delete(userController.deleteUser);

    //Update an user in user table (token)
    app.route('/api/user').put(userController.updateUser);
};