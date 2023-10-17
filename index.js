// installing express library
const express = require('express');
// connecting with mongoDB
const db = require('./config/mongoose');

// calling express function
const app = express();
const port = 8000;

// bodyParser will help in encoding request's body
const bodyParser = require('body-parser');

// middlewares
app.use(bodyParser.urlencoded());
// connecting routes
app.use('/',require('./routes'));
// connecting statis files
app.use(express.static('./assets'));
/// setting view engine to ejs
app.set('view engine','ejs');
app.set('views','./views');

//adding listner
app.listen(port,function(e){
    if(e){
        console.log(`There is an error ${e}`);
        return;
    }
    console.log(`server is running on ${port}`);
})