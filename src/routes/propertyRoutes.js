import express from "express";
import { createProperty, deleteProperty, getAllProperty, getPropertyById, updateProperty } from "../controller/propertyController.js";
import auth from "../middleware/auth.js";

const propertyRouter = express.Router();

propertyRouter.get("/properties", auth, getAllProperty);
propertyRouter.get("/property/:id", auth, getPropertyById);
propertyRouter.post("/property", auth, createProperty);
propertyRouter.put("/property/:id", auth, updateProperty)
propertyRouter.delete("/property/:id", auth, deleteProperty);

export default propertyRouter;
