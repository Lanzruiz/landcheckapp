import pool from "../config/db.js"; 

export const getAllPropertyService = async () =>  {
    const result = await pool.query("SELECT * FROM properties");
    return result.rows;
}
export const getPropertyByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM properties where id = $1", [id]);
    return result.rows[0];
}
export const createPropertyService = async (nameOfProperty, numberOfBeds, price, propertyType) => {
    const result = await pool.query("INSERT INTO properties (nameOfProperty, numberOfBeds, price, propertyType) VALUES ($1, $2, $3, $4) RETURNING *", [nameOfProperty, numberOfBeds, price, propertyType]);
    return result.rows[0];
};
export const updatePropertyService = async (id, nameOfProperty, numberOfBeds, price, propertyType) => {
    const result = await pool.query("UPDATE properties SET nameOfProperty = $1, numberOfBeds = $2, price = $3, propertyType = $4 WHERE id = $5 RETURNING *", [nameOfProperty, numberOfBeds, price, propertyType, id]);
    return result.rows[0];
}
export const deletePropertyService = async (id) => {
    const result = await pool.query("DELETE FROM properties WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}
