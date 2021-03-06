import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import articleRoutes from "./routes/article";

const app: Application = express();
const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/api/article", articleRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://dimaZheltok:yFWB063v5NXuVkzW@cluster0.8kl48.mongodb.net/news-app-data?w=majority"
    );
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
