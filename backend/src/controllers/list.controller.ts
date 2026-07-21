import type { Request, Response } from "express";
import List from "../models/list.model.js";

export async function getLists(req: Request, res: Response){
    const lists = await List.find({});

    res.status(200).json(lists);
};

export async function createList(req: Request, res: Response){
    try {
        const newList = await List.create(req.body);

        return res.status(201).json(newList);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create new list"
        });
    };
};


