const mongoose = require("mongoose");
/* const connectDB = async () => {
  try {
    // mongoDB connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}; */

// Serv2 Template
const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGO_URI,
    (err) => {
      if (!err) console.log("database  is connected");
      else console.log("db err");
    }
  );
};
module.exports = connectDB;
