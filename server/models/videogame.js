const author = require("./author");
const mongoose = require("mongoose");

const videogameSchema = new mongoose.Schema({
	title: String,
	author: String,
	price: Number,
});

const Videogame = mongoose.model("Videogame", videogameSchema);

module.exports = Videogame;
