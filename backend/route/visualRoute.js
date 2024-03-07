import express from "express";
import { visualData } from "../controller/visualizationController.js";

const router2 = express.Router();

router2.get("/visual", visualData);

export { router2 };
