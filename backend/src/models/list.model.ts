import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tasks: [String],
});

const List = mongoose.model("List", listSchema);

export default List;

