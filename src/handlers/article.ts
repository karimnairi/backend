import { Article } from '../models/article'
import * as services from './../services/article'
import {FindCategorieByCategorieId} from './../services/categorie'

import { RequestHandler } from 'express'


const create : RequestHandler = async(req , res) =>{

    const data = req.body

    const Categorie : any =await FindCategorieByCategorieId(data.idCategorie)
    if(!Categorie ){
        return res.status(404).send('no categorie')
    }
   
    const articleRow= new Article
    articleRow.categorie=Categorie
    articleRow.nomArticle=data.nomArticle
    articleRow.description=data.description
    articleRow.DureeArticle=data.DureeArticle
    articleRow.prixArticle=data.prixArticle

    await services.create(articleRow).then(()=>{
        res.status(200).send(articleRow)
    }).catch((e)=>{
        res.status(500).send(e)
    })

}

const getallArticle : RequestHandler = async (req, res) =>{
    const AllArticle : any = await services.getallArticle()
    if (AllArticle.length === 0
    ) {
        res.status(404).send("NOT FOUND")
    }

    res.status(200).send(AllArticle)
}
const getArticleById: RequestHandler = async (req, res) => {
    try {
        const  categorieId  = req.params.id
        const categorie : any =await FindCategorieByCategorieId(parseInt(categorieId))

        const articles = await services.getArticleById(categorie);
        res.status(200).json(articles);
    } catch (error) {
        // Send the actual error message or error object in the response
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const FindArticleByArticleId: RequestHandler = async (req, res) => {
    const articleId = parseInt(req.params.id);
  
    try {
      const article = await services.getArticleByArticleId(articleId);
      
      if (!article) {
        return res.status(404).json({ error: 'Lieu not found' });
      }
      
      res.status(200).json(article);
    } catch (error) {
      console.error('Error finding Lieu by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
export {create,getallArticle,getArticleById,FindArticleByArticleId}