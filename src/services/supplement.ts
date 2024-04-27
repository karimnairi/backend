import {Supplement} from "../models/supplement"

const create = async(data :any) =>{
    return await Supplement.save(data)
}
const getallSupplement= async()=>{
    return await Supplement.find()
}
export{create,getallSupplement}