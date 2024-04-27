import { Table } from '../models/table'
import * as services from './../services/table'
import {FindLieuById} from './../services/lieu'

import { RequestHandler } from 'express'


const create : RequestHandler = async(req , res) =>{

    const data = req.body

    const lieu : any =await FindLieuById(data.lieuId)
    if(!lieu ){
        return res.status(404).send('no lieu')
    }
    const existingTable = await Table.findOne({ where: { numTable: data.numTable, lieu: { idLieu: data.lieuId } } });
    if (existingTable) {
        return res.status(400).send('Table with the same numTable already exists for this lieu');
    }
    const TableRow = new Table
    TableRow.lieu=lieu

    TableRow.numTable=data.numTable



    

   




    await services.create(TableRow).then(()=>{
        res.status(200).send(TableRow)
    }).catch((e)=>{
        res.status(500).send(e)
    })

}
const getAllTable : RequestHandler = async (req, res) =>{
    const allTable : any = await services.getAllTable()
    if (allTable.length === 0
    ) {
        res.status(404).send("Andek l asba")
    }

    res.status(200).send(allTable)
}
const getTablesByLieuId: RequestHandler = async (req, res) => {
    try {
        const  lieuId :any = req.params.id

        const lieu : any =await FindLieuById(parseInt(lieuId))
        if(!lieu ){
            return res.status(404).send('no lieu')
        }
    console.log(lieu)
        const tables = await services.getTablesByLieuId(lieu)
        res.status(200).json(tables);
    } catch (error) {
   console.log(error) 
       res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {create,getAllTable,getTablesByLieuId }