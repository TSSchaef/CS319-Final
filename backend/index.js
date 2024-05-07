/*
CS319 Final Project: Challenge Champs
Authors: Tyler Schaefer and Tyler Vick
5/1/24
*/


const express = require("express");
const db = require("./db.js");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

//app.use(express.static("public"));
//app.use("/images", express.static("images"));

app.listen(PORT, () => {
console.log(`Server is running on ${PORT}`);
});

app.get("/challenge", async (req, res) => {
    try {
    const query = "SELECT * FROM challenges";
    const [result] = await db.query(query); // Execute the query and wait for the result
    console.log("Success in Reading MySQL");
    res.status(200).send(result); // Send the results as the response
    } catch (err) {
    // If an error occurs, catch it and send an appropriate error response
    console.error("Error in Reading MySQL :", err);
    res.status(500).send({ error: 'An error occurred while fetching items.' });
    }
    });
