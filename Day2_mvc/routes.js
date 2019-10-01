const express = require('express');
const router = express();
const ContactController = require('./controllers/contactController');

//root path: shows contact form
router.get('/', ContactController.newContact);

//show contacts
router.get('/contacts', ContactController.index);

//saves form infor to contacts array
router.post('/contacts', ContactController.create);

module.exports = router;