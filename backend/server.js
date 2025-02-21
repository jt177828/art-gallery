import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import itemRoutes from './routes/item.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/items", itemRoutes);

app.use(express.json()); // allows us to accept JSON data in the body

app.listen(PORT, () => {
    connectDB();
    console.log('http://localhost:' + PORT + ' good');
})