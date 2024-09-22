import express from 'express';
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
    res.send("Server is ready.")
})

console.log(process.env.MONGO_URI);

app.listen(8080, () => {
    console.log("server started at http://localhost:8080");
})

