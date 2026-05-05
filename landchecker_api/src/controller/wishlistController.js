import { createWishlistService, getAllWishlistService, getWishlistByIdService, deleteWishlistService, getWishlistByUserIdPropertyIdService, getWishlistByUserIdService } from "../models/wishlistModel.js";

// Standardized response function

const handleResponse = (res, status, message, data = null ) => {
    res.status(status).json({
        status, 
        message, 
        data,
    });
};

export const createWishlist = async (req, res, next) => {
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

export const getAllWishlist = async (req, res, next) => {
   try {
     const wishlists = await getAllWishlistService();
     handleResponse(res, 200, "Wishlists retrieved successfully", wishlists);
   } catch (error) {
     next(error);
   }
    

}


export const getWishlistById = async (req, res, next) => {
   const { id } = req.params;
   try {
     const wishlist = await getWishlistByIdService(id);
     if (!wishlist) {
       return handleResponse(res, 404, "Wishlist not found");
     }
     handleResponse(res, 200, "Wishlist retrieved successfully", wishlist);
   } catch (error) {
     next(error);
   }
    

}

export const getWishlistByUserId = async (req, res, next) => {
   const { userID } = req.params;
   try {
     const wishlist = await getWishlistByUserIdService(userID);
     if (!wishlist) {
       return handleResponse(res, 404, "Wishlist not found");
     }
     handleResponse(res, 200, "Wishlist retrieved successfully", wishlist);
   } catch (error) {
     next(error);
   }
    

}


export const updateWishlist = async (req, res, next) => {
   const { id } = req.params;
   const { userID, propertyID } = req.body;
   try {
     const wishlist = await getWishlistByIdService(id);
     if (!wishlist) {
       return handleResponse(res, 404, "Wishlist not found");
     }
     const updatedWishlist = await updateWishlistService(id, { userID, propertyID });
     handleResponse(res, 200, "Wishlist updated successfully", updatedWishlist);
   } catch (error) {
     next(error);
   }
    

}


export const deleteWishlist = async (req, res, next) => {
   const { id } = req.params;
   try {
     const wishlist = await getWishlistByIdService(id);
     if (!wishlist) {
       return handleResponse(res, 404, "Wishlist not found");
     }
     const deletedWishlist = await deleteWishlistService(id);
     handleResponse(res, 200, "Wishlist deleted successfully", deletedWishlist);
   } catch (error) {
     next(error);
   }
    

}