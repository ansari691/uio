const express = require("express");
const Careers = require("../../models/Careers");

const router = express.Router();

//post
router.post("/", async (req, res) => {
  try {
    const newCareers = new Careers({
      careerTitle: req.body.careerTitle,
      careerExperience: req.body.careerExperience,
      careerDescription: req.body.careerDescription
    });

    const career = await newCareers.save();
    res.json(career);
  } catch (error) {
    res.json(error);
  }
});

//get all
router.get("/", async (req, res) => {
  const careers = await Careers.find();
  return res.json(careers);
});

//get by id
router.get("/:id", async (req, res) => {
  const service = await Careers.findById(req.params.id);
  return res.json(service);
});

//edit by id
router.put("/:id", async (req, res) => {
  try {
    const service = await Careers.findById(req.params.id);

    const {
      careerTitle,
      careerExperience,
      careerDescription
    } = req.body;

    service.career = careerTitle;
    service.careerTitle = careerExperience;
    service.careerDescription = careerDescription;

    const updated = await service.save();
    res.json(updated);
  } catch (error) {
    res.json(error);
  }
});

//delete by id
router.delete("/:id", async (req, res) => {
  try {
    const service = await Careers.findByIdAndDelete(req.params.id);
    res.json("deleted successfully");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;