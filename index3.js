import express from "express";

const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log("Request method: ", req.stat);
//   next();
// });
function logger(req, res, next) {
  console.log(req.method, req.url, res.statusCode=400);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
  res.statusCode;
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
