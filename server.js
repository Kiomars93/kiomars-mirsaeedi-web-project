// Including dependencies
const express = require("express");
const path = require("path");


const app = express();

// EXPLAIN
app.use("/", express.static(path.resolve(__dirname)));


// What this method does is that it redirect the user to the same index.html file regardless the routing they choose
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || kiomars93.github.io / kiomarsmirsaeedi.github.io, () => console.log("Server running..."));