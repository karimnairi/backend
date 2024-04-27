import { Router } from "express"
import { create,getallSupplement} from "../handlers/supplement"
const supplementRouter = Router()

supplementRouter.post("", create)
supplementRouter.get("" , getallSupplement)

export default supplementRouter
