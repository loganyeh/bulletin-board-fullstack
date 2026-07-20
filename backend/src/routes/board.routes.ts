import express from "express";
import { 
    getLists, createList
 } from "../controllers/list.controller.js";

const router = express.Router();

// GET ALL Boards
router.get("/", getLists);

// CREATE list
router.post("/", createList);


export default router;