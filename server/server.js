// LOADING ENV VARIABLES
if (process.env.NODE_ENV != "production") {
	require("dotenv").config();
}

// IMPORTS
const express = require("express");
const cors = require("cors");
const connectionHandler = require("./lib/connectionHandler");
const Videogame = require("./models/videogame");

// CREATING APP
const app = express();

// CONFIGURE EXPRESS APP
app.use(express.json());
app.use(cors());

// CONNECT TO DB
connectionHandler();

// HTTP POST TO DB
app.post("/videogames", async (req, res) => {
	const { title, body } = req.body;

	const videogame = await Videogame.create({
		title: title,
		author: author,
	});

	res.json({ videogame });
});

// RUNNING APP
app.listen(process.env.PORT);
