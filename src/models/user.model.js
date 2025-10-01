import db from "../config/db.js";

const getAllUsers = async () => {
    try{
     const result = await db.query("SELECT * FROM users");
     return result.rows;
    }catch(err){
        console.error("Error executing query:", err);
        throw new Error("Database query failed", err, 500);
    }
   
};

const createUser = async (name, email, password) => {
    try{
     const result = await db.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);
     return result.rows[0];
    }catch(err){
        console.error("Error executing query:", err);
        throw new Error("Database query failed", err, 500);
    }
   
};

export { getAllUsers, createUser };