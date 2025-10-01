import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js"; 
import createTables  from "./data/createTables.js";
import userRouter from "./routes/user.routes.js"

dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (_, res) => {
  try {
    const result = await db.query(
      "SELECT current_database() as db, current_user as user, version() as version"
    );
    const { db: database, user, version } = result.rows[0];

    res.send(`Database: ${database}, User: ${user}, Version: ${version}`);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Database query failed");
  }
});

app.use("/api", userRouter);

// server running
createTables().then(() => {
  console.log("Tables created successfully");
});
app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
