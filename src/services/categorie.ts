import {Categorie} from "../models/categorie"

const create = async(data :any) =>{
    return await Categorie.save(data)
}

const getAllCategorie = async()=>{
    return await Categorie.find()
}

const getCategorieById = async (target: any) => {
    return await Categorie.findBy({lieu : target});
};
const FindCategorieByCategorieId = async (id: number) => {
    return await Categorie.findOne({ where: { idCategorie: id } });
        
    

}


export {create,getAllCategorie,getCategorieById,FindCategorieByCategorieId} 