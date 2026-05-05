import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middleware/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import propertyRouter from "./routes/propertyRoutes.js";
import createPropertyTable from "./data/createPropertyTable.js";
import wishlistRouter from "./routes/wishlistRoutes.js";
import createWishlistTable from "./data/createWishlistTable.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;


// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/", [userRoutes, propertyRouter, wishlistRouter, authRouter]);


// Error handling middleware
app.use(errorHandling);

// Table Seeding
createUserTable();
createPropertyTable();
createWishlistTable();

// Testing postgress connection
app.get("/dbtest", async (req, res) =>  {
   const result = await pool.query("SELECT current_database()");
   res.send(`The database name is : ${result.rows[0].current_database}`)
});

// Server running
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});