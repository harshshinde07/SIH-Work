const vaccinationDetailsRoute = require("express").Router();
const VaccinationDetailsModel = require("../models/vaccination");

vaccinationDetailsRoute.route("").post(function (req, res) {
  let details = new VaccinationDetailsModel(req.body);
  details
    .save()
    .then((response) => {
      res.status(200).json({ response: "Details saved successfully." });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = vaccinationDetailsRoute;
