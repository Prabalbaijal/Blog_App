import User from "../models/UserSchema"
import bcrypt from "bcryptjs"

export const signup=async(req,res)=>{
    try{
        const user=req.body
        const newuser=new User(user)
        await newuser.save()

        return res.status(200).json({
            message: 'Account Created Successfully.',
            success:true
        })
    }catch(error){
        return res.status(500).json({
            message:'Server Error',
            success:false
        })
    }
}