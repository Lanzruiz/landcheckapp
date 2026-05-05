import express from "express";
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from "../controller/userController.js";
import { createUserValidation, loginUserValidation } from "../middleware/validation.js";
import validate from "../middleware/validationErrorHandler.js";
import { loginUser } from "../controller/authController.js";

const authRouter = express.Router();


authRouter .post("/register", createUserValidation, validate, createUser);
authRouter.post("/login", loginUserValidation, validate, loginUser)

export default authRouter;
