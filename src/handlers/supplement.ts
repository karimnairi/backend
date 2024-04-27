import { Supplement } from '../models/supplement'
import * as services from './../services/supplement'
import {getArticleByArticleId} from './../services/article'

import { RequestHandler } from 'express'


const create : RequestHandler = async(req , res) =>{

    const data = req.body

    const article : any =await getArticleByArticleId(data.idArticle)
    if(!article ){
        return res.status(404).send('no article')
    }
   
    const supplemntRow= new Supplement
    supplemntRow.article=article
    supplemntRow.nomsupplement=data.nomsupplement
    supplemntRow.prixSupplement=data.prixSupplement
    

    await services.create(supplemntRow).then(()=>{
        res.status(200).send(supplemntRow)
    }).catch((e)=>{
        res.status(500).send(e)
    })

}

const getallSupplement : RequestHandler = async (req, res) =>{
    const AllArticle : any = await services.getallSupplement()
    if (AllArticle.length === 0
    ) {
        res.status(404).send("NOT FOUND")
    }

    res.status(200).send(AllArticle)
}


export {create,getallSupplement}