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

export const getFilmByName = async (req, res) => {
    const {name} = req.params

    try{
        const films = await Film.find({nome : new RegExp('^' + name, 'm')})
        if(films.length == 0){
            res.status(404).json({message: "non trovato"}) // TODO: Chiedere se è giusto mandare un 404
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
        res.status(400).json({"message" : "campi non validi"})
    }
}

// TODO: DELETE E PATCH