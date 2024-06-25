import express from 'express'
import { signup } from '../controllers/user_controller.js'

const router=express.Router()

router.route("/signup").post(signup)

export default router