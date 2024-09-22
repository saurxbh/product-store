import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
    res.send("Server is ready.")
})


app.listen(8080, () => {
    connectDB();
    console.log("server started at http://localhost:8080");
})

