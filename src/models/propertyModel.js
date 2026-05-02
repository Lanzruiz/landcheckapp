import pool from "../config/db.js"; 

export const getAllPropertyService = async () =>  {
    const result = await pool.query("SELECT * FROM properties");
    return result.rows;
}
export const getPropertyByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM properties where id = $1", [id]);
    return result.rows[0];
}
export const createPropertyService = async (name, email) => {
    const result = await pool.query("INSERT INTO properties (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
    return result.rows[0];
};
export const updatePropertyService = async (id, name, email) => {
    const result = await pool.query("UPDATE properties SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id]);
    return result.rows[0];
}
export const deletePropertyService = async (id) => {
    const result = await pool.query("DELETE FROM properties WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}
