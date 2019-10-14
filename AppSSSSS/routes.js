const express = require('express');
const router = express();
const ContactsController = require('./controllers/contacts_controller');

router.get('/', ContactsController.newResource);

router.get('/contacts', ContactsController.index);

router.post('/contacts', ContactsController.create);

// router.get("/", (req, res) => {
//     // Generate pages to show and deliver them with "res.render()"
//     res.render('contact');

//     // Send data directly with "res.send()"
//     //res.send("Alex is the best!");
// });

// router.get("/contacts", (req, res) => {
//     res.send(contacts);

// });

// router.post("/contacts", (req, res) => {
//     console.log("Submitted data is: " + req.body.name + ": " + req.body.email);
//     contacts.push({name: req.body.name, email: req.body.email});
//     console.log(contacts);
//     // res.send(req.body);
//     res.render('success');
//     // res.redirect('/');
// })


// route for any URL that isn't covered by previous routes:
router.get("*", (req, res)=>{
    res.send("404 not found!");
})

module.exports = router;