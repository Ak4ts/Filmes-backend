const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      return console.log("Can't connect with the database :(");
    });
  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));

  db.once("open", () => {
    console.log("📁📁📁 Connected to the database");
  });
}

module.exports = connectToDatabase;
