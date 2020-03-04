const mongoose = require("mongoose");

const CareersSchema = new mongoose.Schema({

    careerTitle : { type : String, required: true},
    careerExperience : { type : String, required : true},
    careerDescription : { type : String, required : true}

})

module.exports = Careers = mongoose.model("career", CareersSchema);