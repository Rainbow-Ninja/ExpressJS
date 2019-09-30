const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');

//create app form express
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const students = ["Philip", "Derek", "Hayden", "Dave", "Jo"];

const port = 3000;

app.get('/', (req, res) => {
    res.render('home', {
        name: "Nands",
        firstLunchPartner: students[Math.floor(Math.random()*students.length)],
        secondLunchPartner: students[Math.floor(Math.random()*students.length)]
    });
});
app.get('/students', (req, res) => {
    res.send(`Students are ${students}`);
});
app.post('/students', (req, res) => {
    console.log(req.body.name);
    students.push(req.body.name);
    res.send("Added students");
})

app.listen(port, () => console.log(`server started on port ${port}`));