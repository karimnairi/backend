import { Router } from "express"
import { create, FindArticleByArticleId, getallArticle,getArticleById } from "../handlers/article"
const articleRouter = Router()

articleRouter.post("", create)
articleRouter.get("" , getallArticle)
articleRouter.get("/:id" , getArticleById)
articleRouter.get("/articleId/:id", FindArticleByArticleId);
export default articleRouter
