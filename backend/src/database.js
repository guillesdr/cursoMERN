const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/database";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
