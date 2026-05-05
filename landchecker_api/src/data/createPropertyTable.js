import pool from "../config/db.js";

const createPropertyTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS properties (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nameOfProperty VARCHAR(100) UNIQUE NOT NULL,
    numberOfBeds INTEGER NOT NULL,
    price INTEGER NOT NULL,
    propertyType VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

  try {
     pool.query(queryText);
     console.log("Property Table created if not exists");
  } catch (error) {
     console.error("Error creating Property Table:", error);
  }
}

export default createPropertyTable;