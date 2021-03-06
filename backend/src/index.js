const express = require("express");
const cors = require("cors");
require("./dbConfig");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.listen(3333);
