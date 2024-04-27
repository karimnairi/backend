import { Categorie } from '../models/categorie'
import * as services from './../services/categorie'
import {FindLieuById} from './../services/lieu'

import { RequestHandler } from 'express'


const create : RequestHandler = async(req , res) =>{

    const data = req.body

    const lieu : any =await FindLieuById(data.lieuId)
    if(!lieu ){
        return res.status(404).send('no lieu')
    }
    const existingCategorie = await Categorie.findOne({ where: { nameCategorie: data.nameCategorie, lieu: { idLieu: data.lieuId } } });
    if (existingCategorie) {
        return res.status(400).send('Table with the same numTable already exists for this lieu');
    }

    const categorierow = new Categorie
      categorierow.nameCategorie= data.nameCategorie
      categorierow.lieu=lieu




    await services.create(categorierow).then(()=>{
        res.status(200).send(categorierow)
    }).catch((e)=>{
        res.status(500).send(e)
    })

}
const getAllCategorie : RequestHandler = async (req, res) =>{
    const AllCategorie : any = await services.getAllCategorie()
    if (AllCategorie.length === 0
    ) {
        res.status(404).send("Andek l asba")
    }

    res.status(200).send(AllCategorie)
}
const getCategorieById: RequestHandler = async (req, res) => {
    try {
        const  lieuId  = req.params.id
        const lieu : any =await FindLieuById(parseInt(lieuId))

        const tables = await services.getCategorieById(lieu);
        res.status(200).json(tables);
    } catch (error) {
        // Send the actual error message or error object in the response
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const FindCategorieByCategorieId: RequestHandler = async (req, res) => {
    const categorieId = parseInt(req.params.id);
  
    try {
      const categorie = await services.FindCategorieByCategorieId(categorieId);
      
      if (!categorie) {
        return res.status(404).json({ error: 'Lieu not found' });
      }
      
      res.status(200).json(categorie);
    } catch (error) {
      console.error('Error finding Lieu by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


export {create,getAllCategorie ,getCategorieById,FindCategorieByCategorieId}