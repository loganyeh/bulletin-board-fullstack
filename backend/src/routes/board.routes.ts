import express from "express";
import { 
    getLists, createList, deleteList
 } from "../controllers/list.controller.js";

const router = express.Router();

// GET ALL Boards
router.get("/", getLists);

// CREATE list
router.post("/", createList);

// DELETE list
router.delete("/:id", deleteList);


export default router;