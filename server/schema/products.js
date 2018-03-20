const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String
    }
}, {collection: "ProductData"})

module.exports = productSchema;