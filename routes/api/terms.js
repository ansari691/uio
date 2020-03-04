const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const termsSchema = mongoose.Schema({
    terms : { type : String, required : true}
})

const Terms = mongoose.model("terms", termsSchema);

router.put('/', async (req, res) => {
    const terms = await Terms.find();

    console.log(terms.length);
    //const result = await newTerms.save();
    if(terms.length == 0) {
        const newTerms = new Terms({
            terms : req.body.terms
        })

        const result = await newTerms.save();
        
        return res.json(result);
    }
    else{
        console.log(terms);
        terms[0].terms = req.body.terms;

        const result = await terms[0].save(); 

        return res.json(result);
    }
});


//get all
router.get('/', async (req,res) => {
    const terms = await Terms.find();
    res.json(terms);
});


module.exports = router;