import express from "express";
import { 
    getAllBoards,

 } from "../controllers/list.controller.js";

const router = express.Router();

// GET ALL Boards
router.get("/", getAllBoards);




export default router;