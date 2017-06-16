var mongoose = require('mongoose');

var QuotationSchema = new mongoose.Schema({
    quote: String,
    author: String,
    theme: String,
    date: Date,
    tags: String
});

var QuotationModel = mongoose.model('quotations', QuotationSchema);

module.exports = QuotationModel;