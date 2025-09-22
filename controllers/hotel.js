import { promise } from "bcrypt/promises.js";
import Hotel from "../models/Hotel.js";

export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch (err) {
        next();
    }
    
}
export const updateHotel = async(req,res,next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
            $set:req.body
        },{new:true})
        res.status(200).json(updateHotel);
    } catch (err) {
        next()
    }
}
export const deleteHotel = async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
       
       res.status(200).json("Hotel has been deleted!");
   } catch (err) {
       next();
   }
    
}
export const getHotel = async(req,res,next)=>{
    try {
        const getHotel = await Hotel.findById(req.params.id )
        res.status(200).json(getHotel);
    } catch (err) {
        next();
    }
    
}
export const getAllHotel = async(req,res,next)=>{
    const {min,max ,limit,...others} = req.query;
    try {
        const getAllHotel = await Hotel.find({...others,
            cheapestPrice:{
                $gt:min | 1,
                $lt :max || 999,
            
            }
        }).limit(Number(limit));
        res.status(200).json(getAllHotel);
    } catch (err) {
        next(err);
    }
    
}
// export const countByCity =async (req,res,next)=>{
//     try {
//         const cities = req.query.cities.split(",");
//         const list = await Promise.all(
//             cities.map(city=>{
//             return  Hotel.countDocuments({city:city});

//             })
//         )
//         res.status(200).json(list);
//     } catch (err) {
//         next()
        
//     }
// }
export const countByCity = async(req,res,next)=>{
    try {
        const counts = await Hotel.aggregate([{
            $group:{
                _id: "$city",
                count:{$sum:1}
            }
        }]);
        res.status(200).json(counts)
        
    } catch (err) {
        next()
        
    }
}
export const countByType =async(req,res,next)=>{
    try {
        const counts = await Hotel.aggregate([{
            $group:{
                _id:"$type",
                count:{$sum:1}
            }
        }])
        res.status(200).json(counts)
        
    } catch (err) {
        next()
        
    }
}