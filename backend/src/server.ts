import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routes
import BoardRoutes from "./routes/board.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if(!MONGO_URI) {
    throw new Error("MONGO_URI is missing");
};

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use("/", BoardRoutes);

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
