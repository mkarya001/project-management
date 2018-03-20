const mongoose = require('mongoose');

const product = require('./products');

module.exports  = mongoose.model('product', product);