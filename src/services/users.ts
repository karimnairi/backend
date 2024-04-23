import Users from "../models/users"


const create = async(data :any) =>{
    return await Users.save(data)
}
const getAlluser = async()=>{
    return await Users.find()
}



export {create, getAlluser} 