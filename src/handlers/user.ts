import { User } from '../models/user'
import * as services from './../services/user'
import { RequestHandler } from 'express'


const create : RequestHandler = async(req , res) =>{
    const data = req.body

    if ( !data.NameUser || !data.PasswordUser|| !data.Email ) {
        res.status(400).send("Invalid Informations")
    }
    const userRow = new User
    userRow.NameUser = data.NameUser
    userRow.PasswordUser = data.PasswordUser
    userRow.Email =data.Email

    await services.create(userRow).then(()=>{
        res.status(200).send(userRow)
    }).catch((e)=>{
        res.status(500).send(e)
    })

}
const getAlluser : RequestHandler = async (req, res) =>{
    const alluser: any = await services.getAlluser()
    if (alluser.length === 0
    ) {
        res.status(404).send("Andek l asba")
    }

    res.status(200).send(alluser)
}



export {create,getAlluser }