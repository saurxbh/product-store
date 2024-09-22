import express from 'express';

const app = express();

app.get("/products", (req, res) => {
    res.send("Server is ready.")
})

app.listen(8080, () => {
    console.log("server started at http://localhost:8080");
})

