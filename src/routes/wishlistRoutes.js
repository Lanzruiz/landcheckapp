import express from "express";
import { createWishlist, deleteWishlist, getAllWishlist, getWishlistById, getWishlistByUserId, updateWishlist } from "../controller/wishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/wishlists", getAllWishlist);
wishlistRouter.get("/wishlist/:id", getWishlistById);
wishlistRouter.get("/wishlist/user/:userID", getWishlistByUserId);
wishlistRouter.post("/wishlist", createWishlist);
wishlistRouter.put("/wishlist/:id", updateWishlist);
wishlistRouter.delete("/wishlist/:id", deleteWishlist);

export default wishlistRouter;
