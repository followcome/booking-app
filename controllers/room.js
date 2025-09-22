// import Booking from "../models/Booking.js"
import Hotel from "../models/Hotel.js"
import Rooms from "../models/Rooms.js"


export const createRoom =async (req,res,next)=>{
    const hotelId = req.params.hotelId
    const newRoom = new Rooms(req.body)
    try{
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
            
        } catch (err) {
            next()
            
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next()
    }

}
export const updateRoom =async (req,res,next)=>{
    try {
        const updateRoom =await Rooms.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateRoom)
    } catch (err) {
        next()
        
    }
}
export const deleteRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelId
  try {
    
    const deleteRoom = await Rooms.findByIdAndDelete(req.params.id);
    try {
        await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
        
    } catch (err) {
        next()
        
    }
    res.status(200).json("Room has been deleted successfully!")
    
  } catch (err) {
    next()
    
  }
}
export const getRoom = async (req,res,next)=>{
   try {
    const getRoom = await Rooms.findById(req.params.id);
    res.status(200).json(getRoom);
    
   } catch (err) {
    next()
    
   }
}
export const getAllRooms = async (req,res,next)=>{
    try {
        const getAllRooms = await Rooms.find();
        res.status(200).json(getAllRooms)
    } catch (err) {
        next()
        
    }
}
export const updateRoomAvailability =async(req,res,next)=>{
    try {
        const {id}= req.params;
        const{hotelId,dates} = req.body;
        
        await Rooms.updateOne({"roomNumbers._id":id},
            {$push:{
                "roomNumbers.$.unavailableDates": { $each:dates}
            }

            }

        )
        // const newBooking = new Booking({
        //     userId:req.user.id,
        //     hotelId,
        //     roomId:id,
        //     dates
        // })
        // await newBooking.save();
        res.status(200).json("Room has been booked!");
    } catch (err) {
        next()
        
    }

}
export const getUserBooking =async (req,res,next)=>{
     try {
        const userId = req.params.userId;
        const bookings = await Booking.find({userId});
        res.status(200).json(bookings);
     } catch (err) {
        next
        
     }
}
export const cancelBooking = async(req,res,next)=>{
     try {
        const {roomNumberId}=req.params
        const {dates} = req.body
        await Rooms.updateOne({"roomNumbers._id":roomNumberId},
            {$pull:{"roomNumbers.$.unavailableDates":{$in:dates}}}
        );
        res.status(200).json("Booking cancelled successfully")
     } catch (err) {
        next()
        
     }
}