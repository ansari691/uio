const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    contact : { type : String, required : true}
})

const Contact = mongoose.model("contact", contactSchema);

router.put('/', async (req, res) => {
    const contact = await Contact.find();

    console.log(contact.length);
    //const result = await newContact.save();
    if(contact.length == 0) {
        const newContact = new Contact({
            contact : req.body.contact
        })

        const result = await newContact.save();
        
        return res.json(result);
    }
    else{
        console.log(contact);
        contact[0].contact = req.body.contact;

        const result = await contact[0].save(); 

        return res.json(result);
    }
});


//get all
router.get('/', async (req,res) => {
    const contact = await Contact.find();
    res.json(contact);
});


module.exports = router;