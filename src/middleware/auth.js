
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.JWT_SECRET || "supersecretkey";

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({msg: "No token, authorization denied"});

  //Verify token
    try {
       const decode = jwt.verify(token, SECRET)

       req.user = decode.user;
       next();
    } catch(err) {
       res.status(401).json({ msg: 'Token is not valid'});
    }
}

export default auth;