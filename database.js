const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(
        "mongodb+srv://Jimmy:123@cluster0.gdsemql.mongodb.net/?retryWrites=true&w=majority"
      )

      .then(() => {
        console.log("database connection successfull");
      })
      .catch((err) => {
        console.log("database connection error" + err);
      });
  }
}

module.exports = new Database();
