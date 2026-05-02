import pool from "../config/db.js";

const createUserTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

  try {
     pool.query(queryText);
     console.log("User Table created if not exists");
  } catch (error) {
     console.error("Error creating User Table:", error);
  }
}

export default createUserTable;