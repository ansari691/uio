const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const router = express.Router();

const homeBannerSchema = new mongoose.Schema({
    bannerImages : { type : Array, required : true }
})

const HomeBanner = mongoose.model("homeBanner", homeBannerSchema);

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/bannerImages");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    }
  });
  
  var upload = multer({
    storage: storage
  }).array("bannerImages", 10);

  router.put('/', upload, async(req, res) => {
      const bannerImages = await HomeBanner.find();

      if(bannerImages.length == 0){
        const newBannerImage = new HomeBanner({
            bannerImages : req.files 
        })
        const result = await newBannerImage.save();
        res.json(result);
      }
      else{
        bannerImages.push();
      }
  })

  router.get('/', async (req, res) => {
      const bannerImages = await HomeBanner.find();
      res.json(bannerImages);
  })

module.exports = router;