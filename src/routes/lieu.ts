import { Router } from "express"
import { create , findLieuById, getAllLieu } from "../handlers/Lieu"
const lieuRouter = Router()

lieuRouter.post("", create)
lieuRouter.get("" , getAllLieu)

lieuRouter.get("/:id" , findLieuById)


export default lieuRouter