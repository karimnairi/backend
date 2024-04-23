import { Router } from "express"
import { create , getAll } from "../handlers/users"
const userRouter = Router()

userRouter.post("", create)
userRouter.get("" , getAll)


export default userRouter