import { createWishlistService, getAllWishlistService, getWishlistByIdService, deleteWishlistService, getWishlistByUserIdPropertyIdService, getWishlistByUserIdService } from "../models/wishlistModel.js";

// Standardized response function

const handleResponse = (res, status, message, data = null ) => {
    res.status(status).json({
        status, 
        message, 
        data,
    });
};

export const register = async (req, res, next) => {
   const { userID, propertyID } = req.body;
   try {

     const wishlist = await getWishlistByUserIdPropertyIdService(userID, propertyID);
     if (wishlist) {
       return handleResponse(res, 400, "Wishlist already exists");
     }
     const newWishlist = await createWishlistService(userID, propertyID);
     handleResponse(res, 201, "Wishlist created successfully", newWishlist);
   } catch (error) {
     next(error);
   }
    

}

export const login = async (req, res, next) => {
   try {
     const wishlists = await getAllWishlistService();
     handleResponse(res, 200, "Wishlists retrieved successfully", wishlists);
   } catch (error) {
     next(error);
   }
    

}

