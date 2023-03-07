import mongoose from "mongoose"
import {Shows} from "../models/shows.js"

export const getShow = async (req, res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: "id non trovato"})
    try{
        const show = await Shows.findById(id)
        res.status(200).json(show)
    }catch(error){
        res.status(404).json(error.message)
    }
}