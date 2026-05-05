import pool from "../config/db.js";

const createWishlistTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS wishlists (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    userID UUID NOT NULL,
    propertyID UUID NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

  try {
     pool.query(queryText);
     console.log("Wishlist Table created if not exists");
  } catch (error) {
     console.error("Error creating Wishlist Table:", error);
  }
}

export default createWishlistTable;