import * as services from './../services/users'
import Users from './../models/users'
import { RequestHandler } from 'express'


const create : RequestHandler = async(req , res) =>{
    const data = req.body

    if (!data.email || !data.fullname) {
        res.status(400).send("Invalid Informations")
    }
    const userRow = new Users
    userRow.email = data.email
    userRow.fullname = data.fullname
    await services.create(userRow).then(()=>{
        res.status(200).send(userRow)
    }).catch((e)=>{
        res.status(500).send(e)
    })

}


const getAll : RequestHandler = async (req, res) =>{
    const allUsers : any = await services.getAlluser()
    if (allUsers.length === 0
    ) {
        res.status(404).send("Andek l asba")
    }

    res.status(200).send(allUsers)
}


export {create , getAll}