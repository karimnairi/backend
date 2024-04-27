import {Article} from "../models/article"

const create = async(data :any) =>{
    return await Article.save(data)
}
const getallArticle= async()=>{
    return await Article.find()
}

const getArticleById = async (target: any) => {
    return await Article.findBy({categorie : target});
};
const getArticleByArticleId = async (id: any) => {
    return await Article.findOne({ where:{idArticle:id} });
};
export {create,getallArticle,getArticleById,getArticleByArticleId} 

