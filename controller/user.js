var express = require('express');
var router = express.Router();
var userModal = require('../model/user');

router.post('/addNumber', function (req, res, next) {
    var number = req.body.number;

    var newUser = new userModal({
        number: number
    });

    newUser.save().then(function (_user) {
        res.jsonp({ 'status': 'success', object: _user });
    });
});

router.get('/getNumbers', function (req, res, next) {
    userModal.find({}).then(function (_users) {
        res.jsonp({ 'status': 'Success', object: _users });
    });
});

module.exports = router;