var mysql = require('mysql');
var connection = mysql.createConnection({
    // properties
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tristancarlosapi'
});

exports.listUser = function (req, res, next) {
    var response = [];
    connection.query("SELECT * FROM user", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            Object.keys(result).forEach(function (key) {
                var row = result[key];
                console.log(row.surname);
            });
            res.json(result);
        }
    });
}

exports.userWithToken = function (req, res, next) {
    var response = [];
    var token = req.params.token;
    connection.query("SELECT * FROM user WHERE token=" + token + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            Object.keys(result).forEach(function (key) {
                var row = result[key];
                console.log(row.surname);
            });
            res.json(result);
        }
    });
}

exports.addNewUser = function (req, res, next) {
    var token = req.headers.token
    var surname = req.body.surname;
    var name = req.body.name;
    var age = req.body.age;
    var wallet = req.body.wallet;
    var imageUrl = req.body.url;
    connection.query("INSERT INTO user (token, surname, name, age, wallet, imageurlprofile) VALUES ('" + token + "', '" + surname + "', '" + name + "', '" + age + "', '" + wallet + "', '" + imageUrl + "')", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has inserted into table ! :)");
        }
    });
}

exports.deleteUser = function (req, res, next) {
    var token = req.body.user;
    connection.query("DELETE FROM user WHERE token=" + token + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has deleted from table user ! :)");
        }
    });
}

exports.updateUser = function (req, res, next) {
    var token = req.headers.token;
    var surname = req.body.surname;
    var name = req.body.name;
    var age = req.body.age;
    var wallet = req.body.wallet;
    var imageUrl = req.body.url;

    connection.query("UPDATE user SET surname='" + surname + "', name='" + name + "', age='" + age + "', wallet='" + wallet + "', imageurlprofile='" + imageUrl + "' WHERE token=" + token + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has updated into table ! :)");
        }
    });
}