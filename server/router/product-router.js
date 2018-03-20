const products = require('../models/products');

module.exports = function(app){
    app.get("/api/get", products.get );
    return app;
}