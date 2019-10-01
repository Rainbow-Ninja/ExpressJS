const express = require('express');
const port = 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(require('./routes'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.listen(port, () => console.log(`started port ${port}`));