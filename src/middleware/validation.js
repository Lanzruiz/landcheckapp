
import { body } from "express-validator";

export const createUserValidation = [
  body("email")
    .isEmail()
    .withMessage("Must be a valid email"),

  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];


export const loginUserValidation = [
  body("email")
    .isEmail()
    .withMessage("Must be a valid email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];



