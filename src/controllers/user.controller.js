import { getAllUsers, createUser } from "../models/user.model.js";

const getAllUsersController = async (_, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Database query failed");
    }
};

const createUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await createUser(name, email, password);
        res.json(user);
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Database query failed");
    }
};

export { getAllUsersController, createUserController };