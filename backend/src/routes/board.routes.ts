import express from "express";
import { 
    getLists, createList, deleteList,
    addTask, deleteTask
 } from "../controllers/list.controller.js";

const router = express.Router();

// GET ALL Boards
router.get("/", getLists);

// CREATE list
router.post("/", createList);

// DELETE list
router.delete("/:id", deleteList);

// ADD task
router.patch("/:id", addTask);

// DELETE task
router.delete("/:listID/task/:taskID", deleteTask);

export default router;