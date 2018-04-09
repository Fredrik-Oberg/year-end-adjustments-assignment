const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Access-Control-Allow-Origin"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.post("/api/v1/customer/:id", function(req, res) {
  var body = req.body;
  /* TODO
  * Validate parameters
  * Save to storage 
  * Return response with saved data
  */
  res.send("Ok");
});
app.get("/api/v1/customer/:id", (req, res) => {
  res.send({
    annualAccountResult: 15144,
    addDeprInven: -7939,
    invetShrinkLumpSum: 0,
    returnTaxAllocRes: 115866,
    addDeprInvenAmount: -7939
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
