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

export async function deleteList(req: Request, res: Response){
    const id = req.params.id;

    const deletedList = await List.findByIdAndDelete(id);

    return res.status(200).json({
        message: "Deleted list succesful", 
        deletedList,
    });
};


