import mongoose from 'mongoose';
const {  } = mongoose;

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,

    },
    price:{
        type:String,
        required:true,

    },
    maxPeople:{
        type:Number,
        required:true,

    },
    roomNumbers:{
        type:[{number:Number,unavailableDates:{type:[Date]}}],
    },
    
}, {timestamps:true})
export default mongoose.model("Room",RoomSchema);