const express = require("express");
const axios = require("axios")
var bodyParser = require("body-parser");
const path = require("path");
const app = express();

const base_url = "http://localhost:3000";

app.set("views", path.join(_dirname, "/public/views"));
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));

app.use(express.static(_dirname + "/public"));const path = require("path");