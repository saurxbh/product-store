import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json()); // Allows us to accept JSON data in req.body

app.post("/api/products", async (req, res) => {
    const product = req.body; // User will send this data
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success:false,
            message:"Please provide all the fields"
        });
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        return res.status(201).json({
            success: true,
            data: newProduct
        });
    } catch(error) {
        console.error("Error while creating product", error.message);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
})


app.listen(8080, () => {
    connectDB();
    console.log("server started at http://localhost:8080");
})

