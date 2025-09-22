import express, { Router } from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { cancelBooking, createRoom, deleteRoom, getAllRooms, getRoom, getUserBooking, updateRoom, updateRoomAvailability } from "../controllers/room.js";
const router = express.Router();
router.post("/:hotelId",verifyAdmin,createRoom)
router.put("/:id",verifyAdmin,updateRoom)
router.delete("/:id/:hotelId",verifyAdmin,deleteRoom)
router.get("/:id",getRoom)
router.get("/",getAllRooms)
router.put("/availability/:id",updateRoomAvailability);
router.put("/cancel/:roomNumberId",cancelBooking);
// router.get("/:userId",getUserBooking)







export default router