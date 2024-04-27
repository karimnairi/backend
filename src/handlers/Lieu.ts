import { Lieu } from '../models/lieu'
import * as services from './../services/lieu'
import { RequestHandler } from 'express'


const create : RequestHandler = async(req , res) =>{
    const data = req.body

    if (!data.EmailLieu || !data.nameLieu || !data.ServiceType || !data.TelLieu || !data.PassLieu   ) {
        res.status(400).send("Invalid Informations")
    }
    const userRow = new Lieu
    userRow.EmailLieu = data.EmailLieu
    userRow.nameLieu = data.nameLieu
    userRow.TelLieu = data.TelLieu
    userRow.PassLieu = data.PassLieu
    userRow.ServiceType = data.ServiceType



    await services.create(userRow).then(()=>{
        res.status(200).send(userRow)
    }).catch((e)=>{
        res.status(500).send(e)
    })

}


const getAllLieu : RequestHandler = async (req, res) =>{
    const alllieu : any = await services.getAllLieu()
    if (alllieu.length === 0
    ) {
        res.status(404).send("Andek l asba")
    }

    res.status(200).send(alllieu)
}

 const findLieuById: RequestHandler = async (req, res) => {
  const lieuId = parseInt(req.params.id);

  try {
    const lieu = await services.FindLieuById(lieuId);
    
    if (!lieu) {
      return res.status(404).json({ error: 'Lieu not found' });
    }
    
    res.status(200).json(lieu);
  } catch (error) {
    console.error('Error finding Lieu by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export {create , getAllLieu,findLieuById}