import pool from "../config/db.js"; 

export const getAllWishlistService = async () =>  {
    const result = await pool.query("SELECT * FROM wishlists");
    return result.rows;
};
export const getWishlistByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM wishlists where id = $1", [id]);
    return result.rows[0];
};

export const getWishlistByUserIdPropertyIdService = async (userID, propertyID) => {
    const result = await pool.query("SELECT * FROM wishlists where userID = $1 and propertyID = $2", [userID, propertyID]);
    return result.rows[0];
};

export const getWishlistByUserIdService = async (userID) => {
    const result = await pool.query("SELECT * FROM wishlists where userID = $1", [userID]);
    return result.rows;
};

export const createWishlistService = async (userID, propertyID) => {
    const result = await pool.query("INSERT INTO wishlists (userID, propertyID) VALUES ($1, $2) RETURNING *", [userID, propertyID]);
    return result.rows[0];
};
export const updateWishlistService = async (id, userID, propertyID) => {
    const result = await pool.query("UPDATE wishlists SET userID = $1, propertyID = $2 WHERE id = $3 RETURNING *", [userID, propertyID, id]);
    return result.rows[0];
};
export const deleteWishlistService = async (id) => {
    const result = await pool.query("DELETE FROM wishlists WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};
