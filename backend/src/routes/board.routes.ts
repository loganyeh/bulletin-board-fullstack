import express from "express";
import { 
    getLists, createList, deleteList,
    addTask, deleteTask, toggleTask, updateTask
 } from "../controllers/list.controller.js";

const router = express.Router();

// GET ALL LISTS
router.get("/", getLists);

// CREATE list
router.post("/", createList);

// DELETE list
router.delete("/:id", deleteList);

// ADD task
router.patch("/tasks/:id", addTask);

// DELETE task
router.delete("/:listID/tasks/:taskID", deleteTask);

// PATCH task
router.patch("/:listID/tasks/:taskID", toggleTask);

// PATCH update task
router.patch("/:listID/tasks/:taskID/update", updateTask);

export default router;