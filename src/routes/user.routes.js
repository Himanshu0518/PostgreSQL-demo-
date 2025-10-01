import express from "express";
import { getAllUsersController, createUserController } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/create-user").post(createUserController);
router.route("/get-users").get(getAllUsersController) ;

export default router;