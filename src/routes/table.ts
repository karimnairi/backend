import { Router } from "express"
import { create,getAllTable,getTablesByLieuId  } from "../handlers/Table"
const tableRouter = Router()

tableRouter.post("", create)
tableRouter.get("",getAllTable )
tableRouter.get("/:id",getTablesByLieuId )





export default tableRouter