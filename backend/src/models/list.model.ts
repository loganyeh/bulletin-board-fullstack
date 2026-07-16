import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tasks:[
        {
            task: String,
        },
    ],
});

const List = mongoose.model("List", listSchema);

export default List;

