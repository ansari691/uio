const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
    about : { type : String, required : true}
})

const About = mongoose.model("about", aboutSchema);

router.put('/', async (req, res) => {
    const about = await About.find();

    console.log(about.length);
    //const result = await newAbout.save();
    if(about.length == 0) {
        const newAbout = new About({
            about : req.body.about
        })

        const result = await newAbout.save();
        
        return res.json(result);
    }
    else{
        console.log(about);
        about[0].about = req.body.about;

        const result = await about[0].save(); 

        return res.json(result);
    }
});


//get all
router.get('/', async (req,res) => {
    const about = await About.find();
    res.json(about);
});


module.exports = router;