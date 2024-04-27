import {Lieu} from "../models/lieu"


const create = async(data :any) =>{
    return await Lieu.save(data)
}
const getAllLieu = async()=>{
    return await Lieu.find()
}
const FindLieuById = async (id: number) => {
    return await Lieu.findOne({ where: { idLieu: id } });
        
    

}






export {create,getAllLieu,FindLieuById} 