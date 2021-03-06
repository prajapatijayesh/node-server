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
        res.jsonp({ 'status': 'success', object: _users });
    });
});

router.post('/signup', (req, res, next) => {
    res.jsonp({ status: 'success', message: 'SMS Sent' });
});

router.post('/verify_otp', (req, res, next) => {
    res.jsonp({ status: 'success', message: 'success' });
});

module.exports = router;