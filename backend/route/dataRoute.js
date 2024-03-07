import express from "express";
import { deleteAllData, initializeData } from "../controller/dataController.js";

const router = express.Router();

router.post("/data", initializeData);
router.delete("/delete", deleteAllData);

export { router };
