const express = require("express")

const FilmsControllers = require("../controllers/FilmsControllers")
const UsersControllers = require("../controllers/UsersControllers")
const UsersMiddlewares = require("../middlewares/userMiddlewares")
const routes = express.Router();

routes.get("/getFilms", FilmsControllers.getFilms);
routes.post("/valid-token/:cookie", UsersMiddlewares.validateToken, UsersControllers.findByToken);

module.exports = routes