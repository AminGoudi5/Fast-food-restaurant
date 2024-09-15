import exprees from 'express'
import { loginUser,registerUser } from '../controllers/adminUserController.js'


const adminUserRouter = exprees.Router()


adminUserRouter.post("/login", loginUser)
adminUserRouter.post("/register", registerUser)

export default adminUserRouter