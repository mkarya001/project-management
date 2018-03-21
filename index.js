const express = require('express');
const path    = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const app = express();


    
 // ENV setup
require('./config');
const appConfig = require('./config/config'); 


// Error Handler 

const errorHandler = require('./server/error-handler');

app.use(errorHandler.logErrors);


//App configuration  and middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session(appConfig.expressSession));


// Static / public path 
app.use(express.static('dist'))
 
 
// Database connection
mongoose.connect(appConfig.dbConfig.URL);
const dataBase = mongoose.connection;

require('./server/schema/index'); // adding schema

dataBase.once('open', () =>{
    // setting if database is working fine
    console.log('database is open')
}); 




// Router setup 
require('./server/router/router')(app); 

app.get("/home", (req, res) => { 
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});



// app listen
const port = process.env.PORT || 3000;
app.listen(port);