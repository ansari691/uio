const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const privacySchema = mongoose.Schema({
    privacy : { type : String, required : true}
})

const Privacy = mongoose.model("privacy", privacySchema);

router.put('/', async (req, res) => {
    const privacy = await Privacy.find();

    console.log(privacy.length);
    //const result = await newPrivacy.save();
    if(privacy.length == 0) {
        const newPrivacy = new Privacy({
            privacy : req.body.privacy
        })

        const result = await newPrivacy.save();
        
        return res.json(result);
    }
    else{
        console.log(privacy);
        privacy[0].privacy = req.body.privacy;

        const result = await privacy[0].save(); 

        return res.json(result);
    }
});


//get all
router.get('/', async (req,res) => {
    const privacy = await Privacy.find();
    res.json(privacy);
});


module.exports = router;