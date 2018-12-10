module.exports = function(app) {
    var cardController = require('../controllers/cardController');
    var userController = require('../controllers/userController');

    /* Routes cards */

    //Get every cards
    app.route('/shop').get(cardController.listCard)

    //Get only one card per id


    //Get every cards per one user (with token)



    /* Routes users */

    //Get every users
    app.route('/').get(userController.listUser);

    //Get only one user per token
    app.route('/user/:token').get(userController.userWithToken);

    //Add a new user with name, surname and age
    app.route('/user').post(userController.addNewUser);

    //Delete a user with token
    app.route('/user').delete(userController.deleteUser);
};