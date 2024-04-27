import { Router } from "express"
import { create,getAllCategorie,getCategorieById,FindCategorieByCategorieId} from "../handlers/categorie"
const categorieRouter = Router()

categorieRouter.post("", create)
categorieRouter.get("",getAllCategorie )
categorieRouter.get("/:id",getCategorieById )

categorieRouter.get("/categorieId/:id", FindCategorieByCategorieId);





export default  categorieRouter