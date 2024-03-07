import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { router } from "./route/dataRoute.js";
import {router2} from "./route/visualRoute.js"
 
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to db...");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", router);
app.use("/data", router2);
