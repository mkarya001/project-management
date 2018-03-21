const mongoose = require('mongoose');

const ProductData = mongoose.model('product');

module.exports = function() { 
    const bookDetails = {};

    bookDetails.get =  (req, res, next) => {
      let data  = new ProductData({title: 'Mandeep'});
        data.save( (err, doc) => {
             res.json(doc);
        });
    }

    return bookDetails;
}