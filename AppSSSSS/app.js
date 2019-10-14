// server initialization:
const express = require('express');
const port = 3000;
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/contact_app", {useNewUrlParser: true}) 
// SYNTAX        db server:  domain   : db name
mongoose.Promise = global.Promise;
//when the db starts tell us if there is any error and tell us in terminal
mongoose.connection.on("error", (error) => console.log(error));


// server middleware:
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// server middleware:
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// server data:
const contacts = [];



// routing: 
app.use(require('./routes'));
const ContactController = require('./controllers/contacts_controller');


// message for when the server boots up:
app.listen(port, () => {
    console.log(`server started on localhost:${port}!`)
});