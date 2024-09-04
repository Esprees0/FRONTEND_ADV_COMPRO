require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hoyaiyo sekai");
});

/*db.run(`CREATE TABLE IF NOT EXISTS books(
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT
)`);*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});