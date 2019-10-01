const contacts = [];

const newContact =  (req, res) => {
    res.json(contacts); 
}

const index = (req, res) => {
    res.render('contact'); //contact is the name of a page, not a route
}

const create = (req, res) => { //contacts is the route i specified in the form
    console.log(req.body); //run this just to see it installed properly
    let {name, email} = req.body;
    let contact = {name, email};
    contacts.push(contact);
    res.render("success");
}

module.exports = {newContact, index, create};