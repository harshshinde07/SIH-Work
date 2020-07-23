const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const vaccinationDetailsRoute = require("./routes/vaccination-details.route");
const app = express();
const cors = require("cors");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "<REPLACE WITH YOUR DB URL>"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.use("/vaccinationDetails", vaccinationDetailsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
