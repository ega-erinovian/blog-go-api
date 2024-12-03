import express from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  getUsersController,
  updateUserController,
} from "../controllers/user.controller";

const router = express.Router();

router.get("/", getUsersController);
router.get("/:id", getUserController);
router.post("/", createUserController);
router.patch("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
