

module.exports = function(app, dataBase){  
    const products = require('../models/books')(dataBase);

    app.get("/api/books/get", products.get );
    return app;
}