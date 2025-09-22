import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {  deleteUser, getAllusers, getUser, updateUser } from "../controllers/user.js";


const router = express.Router();

router.put("/:id",verifyUser,updateUser);
router.delete("/:id",verifyUser,deleteUser);
router.get("/:id",verifyUser,getUser)
router.get("/",verifyAdmin,getAllusers);

export default router