var mysql = require('mysql');
var connectionOnline = mysql.createConnection({
    // properties
    host: 'db4free.net',
    user: 'tristancarlos',
    password: 'Jo33b42y&',
    database: 'tristancarlosapi'
});

exports.listUser = function (req, res, next) {
    connectionOnline.query("SELECT * FROM user", function (err, result, fields) {
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
    var token = req.headers.token;
    var row;
    connectionOnline.query("SELECT * FROM user WHERE token=" + token + " LIMIT 1", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            Object.keys(result).forEach(function (key) {
                row = result[key];
                console.log(row.surname);
            });
            res.json(row);
        }
    });
}

exports.addNewUser = function (req, res, next) {
    console.log(req.body);
    var token = req.headers.token;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var age = req.body.age;
    var mail = req.body.mail;
    var wallet = req.body.wallet;
    var imageUrl = req.body.url;
    connectionOnline.query("INSERT INTO user (token, firstname, lastname, age, mail, wallet, imageUrlProfile) VALUES ('" + token + "', '" + firstname + "', '" + lastname + "', '" + age + "', '" + mail + "', '" + wallet + "', '" + imageUrl + "')", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has inserted into table ! :)");
        }
        res.send('OK');
    });
}

exports.deleteUser = function (req, res, next) {
    var token = req.headers.token;
    connectionOnline.query("DELETE FROM user WHERE token=" + token + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has deleted from table user ! :)");
        }
    });
}

exports.updateUser = function (req, res, next) {
    var token = req.headers.token
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var mail = req.body.mail;
    var age = req.body.age;
    var wallet = req.body.wallet;
    var imageUrl = req.body.url;

    connectionOnline.query("UPDATE user SET firstname='" + firstname + "', lastname='" + lastname + "', age='" + age + "', mail='" + mail + "', wallet='" + wallet + "', imageurlprofile='" + imageUrl + "' WHERE token=" + token + "", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            console.log("User has updated into table ! :)");
        }
    });
}