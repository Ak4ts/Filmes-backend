const express = require("express")
const app = express()
const cors = require("cors")
const connectToDatabase = require("./database")
const routes = require("./routes")

require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use(routes);

connectToDatabase()
app.listen(process.env.PORT, () => console.log("Server running :)"))