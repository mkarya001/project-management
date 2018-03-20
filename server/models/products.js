const mongoose = require('mongoose');

const ProductData = mongoose.model('product');
 

module.exports = {
    get : (req, res, next) => {
        ProductData.find({}, (err, data) => {
            if(err){
               console.log(err)
            }
            console.log(data);
           res.json(data);

        });
    }

    // get : ( req, res, next) => {

    //     let data  = new ProductData({title: 'Testing'});
    //     data.save( (err, doc) => {
    //          res.json(doc);
    //     });
    // }
}