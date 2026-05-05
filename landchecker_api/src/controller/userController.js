import { createUserService, deleteUserService, getAllUserService, getUserByEmailService, getUserByIdService, updateUserService } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Standardized response function

const handleResponse = (res, status, message, data = null ) => {
    res.status(status).json({
        status, 
        message, 
        data,
    });
};

export const createUser = async (req, res, next) => {
   const { name, email, password } = req.body;
   try {

     const checkUser = await getUserByEmailService(email); 
     
     if(checkUser) {
           return handleResponse(res, 400, "User already exists", newUser);
     }

     const salt = await bcrypt.genSalt(10)
     const encryptedPassword = await bcrypt.hash(password, salt);
     const newUser = await createUserService(name, email, encryptedPassword);

     const payload = {
            user: {
               id: newUser.id,
            }
      }
           
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
           if(err)  throw err;
           res.json({ token })
           handleResponse(res, 201, "User created successfully", token);
      })

   } catch (error) {
     next(error);
   }
    

}

export const getAllUser = async (req, res, next) => {
   try {
     const users = await getAllUserService();
     handleResponse(res, 200, "Users retrieved successfully", users);
   } catch (error) {
     next(error);
   }
    

}


export const getUserById = async (req, res, next) => {
   const { id } = req.params;
   try {
     const user = await getUserByIdService(id);
     if (!user) {
       return handleResponse(res, 404, "User not found");
     }
     handleResponse(res, 200, "User retrieved successfully", user);
   } catch (error) {
     next(error);
   }
    

}


export const updateUser = async (req, res, next) => {
   const { id } = req.params;
   const { name, email } = req.body;
   try {
     const user = await getUserByIdService(id);
     if (!user) {
       return handleResponse(res, 404, "User not found");
     }
     const updatedUser = await updateUserService(id, { name, email });
     handleResponse(res, 200, "User updated successfully", updatedUser);
   } catch (error) {
     next(error);
   }
    

}


export const deleteUser = async (req, res, next) => {
   const { id } = req.params;
   try {
     const user = await getUserByIdService(id);
     if (!user) {
       return handleResponse(res, 404, "User not found");
     }
     const deletedUser = await deleteUserService(id);
     handleResponse(res, 200, "User deleted successfully", deletedUser);
   } catch (error) {
     next(error);
   }
    

}