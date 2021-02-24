// Including dependencies
const express = require("express");
const path = require("path");
const credentials = require('./apiCredentials.json');

const app = express();

// EXPLAIN
app.use("/", express.static(path.resolve(__dirname)));


// What this method does is that it redirect the user to the same index.html file regardless the routing they choose
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});