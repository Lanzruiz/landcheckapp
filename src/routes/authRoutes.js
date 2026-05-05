import express from "express";
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from "../controller/userController.js";
import createUserValidation from "../middleware/validation.js";
import validate from "../middleware/validationErrorHandler.js";

const authRouter = express.Router();


authRouter .post("/register", createUserValidation, validate, createUser);
authRouter.post("/login", updateUser)

export default authRouter;
