const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("LASHAKA FASHION"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
