import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const nme = req.body["fname"];
  const letterNumber = req.body["fname"].length + req.body["lname"].length;
  res.render("index.ejs",{
    name_your: nme,
    lettercount_ejs: letterNumber,
  }) 
  console.log(nme + " it has " + letterNumber + " letter in their name");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
