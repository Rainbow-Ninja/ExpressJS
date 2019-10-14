const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    enquiry: {
        type: String,
        default: ""
    }
})

module.exports = ContactSchema;