const mongoose = require("mongoose");

const InternetServiceSchema = new mongoose.Schema({

    internetServiceIcon : { type : String, required: true},
    internetServiceTitle : { type : String, required : true},
    internetServiceDescription : { type : String, required : true}


})

module.exports = InternetService = mongoose.model("internetService", InternetServiceSchema);