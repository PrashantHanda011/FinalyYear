import express from "express";
import {
  getUsers,
  getUserById,
  register,
  updateUserById,
} from "../controllers/user-controller.js";
const router = express.Router();
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", register);
router.put("/:id", updateUserById);

export default router;
