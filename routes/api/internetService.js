const express = require("express");
const InternetService = require("../../models/InternetService");

const router = express.Router();


//post internet service
router.post("/", async (req, res) => {
    try {
      const newInternetService = new InternetService({
        internetService: req.body.InternetService,
        internetServiceTitle: req.body.InternetServiceTitle,
        internetServiceDescription: req.body.InternetServiceDescription
      });
  
      const result = await newInternetService.save();
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });
  
  //get all Internet service
  router.get("/", async (req, res) => {
    const internetServices = await InternetService.find();
    return res.json(internetServices);
  });
  
  //get Internet service by id
  router.get("/:id", async (req, res) => {
    const service = await InternetService.findById(req.params.id);
    return res.json(service);
  });
  
  //edit by id
  router.put("/:id", async (req, res) => {
    try {
      const service = await InternetService.findById(req.params.id);
  
      const {
        InternetService,
        InternetServiceTitle,
        InternetServiceDescription
      } = req.body;
  
      service.InternetService = InternetService;
      service.InternetServiceTitle = InternetServiceTitle;
      service.InternetServiceDescription = InternetServiceDescription;
  
      const updated = await service.save();
      res.json(updated);
    } catch (error) {
      res.json(error);
    }
  });
  

  //delete by id
  router.delete("/:id", async (req, res) => {
    try {
      const service = await InternetService.findByIdAndDelete(req.params.id);
      res.json("deleted successfully");
    } catch (error) {
      res.json(error);
    }
  });

module.exports = router;
