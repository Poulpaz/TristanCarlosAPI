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
                console.log(row.name);
            });
            res.json(result);
        }
    });
}

exports.userWithToken = function (req, res, next) {
    var response = [];
    var token = req.params.token;
    connection.query("SELECT * FROM user WHERE iduser=" + token + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            Object.keys(result).forEach(function (key) {
                var row = result[key];
                console.log(row.name);
            });
            res.json(result);
        }
    });
}

exports.addNewUser = function (req, res, next) {
    var name = req.body.name;
    var surname = req.body.surname;
    var age = req.body.age;
    connection.query("INSERT INTO user (name, surname, age) VALUES ('" + name + "', '" + surname + "', '" + age + "')", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has inserted into table ! :)");
        }
    });
}

exports.deleteUser = function (req, res, next) {
    var idUser = req.body.iduser;
    connection.query("DELETE FROM user WHERE iduser=" + idUser + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has deleted from table user ! :)");
        }
    });
}

exports.updateUser = function (req, res, next) {
    var token = req.headers.token;
    console.log(token);
    var name = req.body.name;
    var surname = req.body.surname;
    var age = req.body.age;

    connection.query("UPDATE user SET name='" + name + "', surname='" + surname + "', age='" + age + "' WHERE iduser=" + token + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has updated into table ! :)");
        }
    });
}