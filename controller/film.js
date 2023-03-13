import mongoose from "mongoose";
import { Film } from "../models/film.js"

export const getAllFilm = async (req, res) => {
    try{
        const film = await Film.find()
        res.status(200).json(film)
    }catch(error){
        res.status(404).json({message : error.message})
    }
}

export const getFilmWithFilter = async (req, res) => {
    const query = req.query

    if(query.name != undefined){
        query.name = new RegExp('^' + query.name, 'm')
    }

    try{
        const films = await Film.find(query)
        if(films.length == 0){
            res.status(404).json({message: "non trovato"}) 
        } else{
            res.status(200).json(films)
        }
        
    }catch(error){
        res.status(404).json(error.message)
    }
}

export const insertFilm = async (req, res) => {
    const body = req.body
    const film = new Film(body)
    
    try{
        await film.save()
        film.save()
        res.status(201).json({"message" : "film aggiunto"})
    }catch(error){
        res.status(400).json({"message" : error.message})
    }
}

export const getFilmById = async (req, res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: "id non trovato"})
    try{
        const film = await Film.findById(id)
        res.status(200).json(film)
    }catch(error){
        res.status(404).json(error.message)
    }
}

// TODO: DELETE E PATCH