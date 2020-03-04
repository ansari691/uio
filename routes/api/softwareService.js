const express = require("express");
const SoftwareService = require("../../models/SoftwareService");

const router = express.Router();

//post sofware service
router.post("/", async (req, res) => {
  try {
    const newSoftwareService = new SoftwareService({
      softwareService: req.body.softwareService,
      softwareServiceTitle: req.body.softwareServiceTitle,
      softwareServiceDescription: req.body.softwareServiceDescription
    });

    const softwareService = await newSoftwareService.save();
    res.json(softwareService);
  } catch (error) {
    res.json(error);
  }
});

//get all software service
router.get("/", async (req, res) => {
  const softwareServices = await SoftwareService.find();
  return res.json(softwareServices);
});

//get software service by id
router.get("/:id", async (req, res) => {
  const service = await SoftwareService.findById(req.params.id);
  return res.json(service);
});

//edit by id
router.put("/:id", async (req, res) => {
  try {
    const service = await SoftwareService.findById(req.params.id);

    const {
      softwareService,
      softwareServiceTitle,
      softwareServiceDescription
    } = req.body;

    service.softwareService = softwareService;
    service.softwareServiceTitle = softwareServiceTitle;
    service.softwareServiceDescription = softwareServiceDescription;

    const updated = await service.save();
    res.json(updated);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const service = await SoftwareService.findByIdAndDelete(req.params.id);
    res.json("deleted successfully");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
