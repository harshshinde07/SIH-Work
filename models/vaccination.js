const mongoose = require("mongoose");

const vaccinationSchema = mongoose.Schema(
  {
    vaccinationDate: { type: Date, require: true },
    species: { type: String, require: true },
    animalType: { type: String, require: true },
    animalName: { type: String, require: true },
    diseaseName: { type: String, require: true },
    vaccineName: { type: String, require: true },
    manufacturer: { type: String, require: true },
    vaccinatedAnimalCount: { type: Number, require: true },
    remarks: { type: String, require: true, default: "No remarks" },
  },
  {
    collection: "vaccinationDetails",
  }
);

module.exports = mongoose.model("VaccinationDetails", vaccinationSchema);
