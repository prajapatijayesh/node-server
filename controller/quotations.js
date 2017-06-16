var express = require('express');
var router = express.Router();
var quotationModel = require('../model/quotation');

router.get('/getQuotations', function (req, res) {
    quotationModel.find({}).then(function (_quotes) {
        res.jsonp({ 'status': 'success', object: _quotes });
    });
});

module.exports = router;