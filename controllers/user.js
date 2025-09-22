import Users from "../models/Users.js"

export const updateUser =async (req,res,next) =>{
    try{
        const updateUser = await Users.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateUser)

    }catch(err){
        next()
    }
}
export const deleteUser =async (req,res,next)=>{
    try {
         await Users.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted successfully")
    } catch (err) {
        next()
        
    }
}
export const getUser = async (req,res,next) =>{
    try {
        const getUser = await Users.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (err) {
    next()        
    }
}
export const getAllusers = async (req,res,next) =>{
    try {
        const getAllusers = await Users.find()
        res.status(200).json(getAllusers)
        
    } catch (err) {
        next();
        
    }
}