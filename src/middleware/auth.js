
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// Standardized response function

const handleResponse = (res, status, message, data = null ) => {
    res.status(status).json({
        status, 
        message, 
        data,
    });
};

const SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  // Get token from header
   const token = req.header('x-auth-token')

   // Check if not token
   if(!token) {
       return handleResponse(res, 401, "No token, authorization denied", null);
   }
   //Verify token
    try {
       const decode = jwt.verify(token, SECRET)

       req.user = decode.user;
       next();
    } catch(err) {
       return handleResponse(res, 401, "Token is not valid", null);
    }
}

export default auth;