const mongoose = require('mongoose');
const ContactSchema = require("./../schemas/contact_schema");

const ContactModel = mongoose.model("contact", ContactSchema);
//calling it contactmodel: it's a model: again a name: contactschema is what we imported from contactschema 

module.exports = ContactModel;
