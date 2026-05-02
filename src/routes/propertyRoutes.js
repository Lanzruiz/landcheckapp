import express from "express";
import { createProperty, deleteProperty, getAllProperty, getPropertyById, updateProperty } from "../controller/propertyController.js";

const propertyRouter = express.Router();

propertyRouter.get("/properties", getAllProperty);
propertyRouter.get("/property/:id", getPropertyById);
propertyRouter.post("/property", createProperty);
propertyRouter.put("/property/:id", updateProperty)
propertyRouter.delete("/property/:id", deleteProperty);

export default propertyRouter;
