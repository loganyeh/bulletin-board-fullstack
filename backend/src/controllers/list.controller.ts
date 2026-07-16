import type { Request, Response } from "express";
import List from "../models/list.model.js";

export async function getLists(req: Request, res: Response){
    const lists = await List.find({});

    res.status(200).json(lists);
};


