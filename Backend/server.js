import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/user", router);

//http://localhost:3000/api/user
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:nandini@cluster0.vrd0ry1.mongodb.net/personalitydata?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
