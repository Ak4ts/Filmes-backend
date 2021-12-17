const express = require("express")

const filmControllers = require("../controllers/filmControllers")

const routes = express.Router();

routes.get("/getFilms", filmControllers.getFilms);

module.exports = routes