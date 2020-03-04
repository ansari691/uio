const mongoose = require("mongoose");

const SoftwareServiceSchema = new mongoose.Schema({

    softwareService : { type : String, required: true},
    softwareServiceTitle : { type : String, required : true},
    softwareServiceDescription : { type : String, required : true}


})

module.exports = SoftwareService = mongoose.model("softwareService", SoftwareServiceSchema);