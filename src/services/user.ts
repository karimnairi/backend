import {User} from "../models/user"


const create = async(data :any) =>{
    return await User.save(data)
}
const getAlluser = async()=>{
    return await User.find()
}






export {create,getAlluser} 