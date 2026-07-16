import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import urlRoutes from "./routes/url.js";

import dns from "dns";
dns.setServers([ // writeen because i am getting error...
    '1.1.1.1',
    '8.8.8.8'
])

dotenv.config();

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://url-shortner-tau-three.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/", urlRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
