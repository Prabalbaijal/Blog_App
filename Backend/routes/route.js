import express from 'express'
import { signup } from '../controllers/user_controller'

const router=express.Router()

router.route("/signup").post(signup)

export default router