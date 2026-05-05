
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserByEmailService } from "../models/userModel.js";

dotenv.config();
// Standardized response function

const handleResponse = (res, status, message, data = null ) => {
    res.status(status).json({
        status, 
        message, 
        data,
    });
};


export const loginUser = async (req, res, next) => {
      const { email, password } = req.body;
     try {
  
       const checkUser = await getUserByEmailService(email); 
       
       if(!checkUser) {
             return handleResponse(res, 400, "Invalid credentials", null);
       }

       const isMatch = await bcrypt.compare(password, checkUser.password)

        if(!isMatch) {
            return handleResponse(res, 400, "Invalid credentials", null);
        }

  
       const payload = {
              user: {
                 id: checkUser.id,
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
    

};

