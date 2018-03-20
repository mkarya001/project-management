
module.exports  = function(app){
    const products = require('./product-router')(app);
    const books = require('./books')(app);

    return {products , books};
}