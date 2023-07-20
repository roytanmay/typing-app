const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
