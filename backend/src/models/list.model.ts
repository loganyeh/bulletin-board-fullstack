import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tasks: [
        {
            task: {
                type: String,
                required: true,
            },
            completed: {
                type: Boolean,
                default: false,
            },
        }
    ],
});

const List = mongoose.model("List", listSchema);

export default List;

