import { Router } from "express"
import { create, getAlluser } from "../handlers/user"
const userRouter = Router()

userRouter.post("", create)
userRouter.get("" , getAlluser)
export default userRouter
