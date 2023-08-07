import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var nameComb = "";

app.use(bodyParser.urlencoded({ extended: true }));

function nameGenerator(req, res, next) {
  nameComb = req.body["street"] + req.body["pet"];
  next();
}

app.use(nameGenerator);
/*TODO: install the right packages to import the right modules and serve up the index.html website when a get request is made to our server (index1.js).*/

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
/*TODO: Get the middleware working so that we can parse the info that is coming from the form, so that when a submit button is pressed and a post request comes over to our server,
we know how to handle it.*/
app.post("/submit", (req, res) => {
  res.send(nameComb);
});
/*TODO: Do a res.send to send a result of the combined word (street+petname) */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
