import User from "../models/UserSchema.js"
import bcrypt from "bcryptjs"

export const signup=async(req,res)=>{
    try{
        const { name, username, password, confirmPassword } = req.body
        if (!name || !username || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are requied!!" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" })
        }
        const user1 = await User.findOne({
            username
        })
        if (user1) {
            return res.status(400).json({ message: "Username already exists !!Try different" })
        }
        const hashedpass = await bcrypt.hash(password, 10)
        
        const user = await User.create({
            username,
            name,
            password: hashedpass,
        })
        const createdUser = await User.findById(user._id).select(
            "-password"
        )
        if (!createdUser) {
            return res.status(500).json({
                message: "Something went wrong while registering the user!!"
            })
        }
        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
            user: createdUser
        })
    }catch(error){
        return res.status(500).json({
            message:'Server Error',
            success:false
        })
    }
}