const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://unigro:Unigro%40123@103.123.47.130:27017/uio?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false", {
      useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });
      console.log("connected to mongodb");
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };

  module.exports = connectDB();