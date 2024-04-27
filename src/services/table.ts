import {Table} from "../models/table"

const create = async(data :any) =>{
    return await Table.save(data)
}

const getAllTable = async()=>{
    return await Table.find()
}

const getTablesByLieuId = async (target: any)=> {
    return await Table.findBy({lieu : target});
};


export {create,getAllTable,getTablesByLieuId} 