import mongoose from "mongoose";
import { Theater } from "../models/theaters.js"

export const getAllTheaters = async (req, res) => {
    try{
        const theater = await Theater.find()
        console.log(theater)
        res.status(200).json(theater)
    }catch(error){
        res.status(404).json(error.message)
    }
}

export const insertTheater = async (req, res) => {

    const theater = new Theater(req.body)

    try{
        await theater.save()

        res.status(201).json({"message" : "theater added"})
    }catch(error){
        res.status(400).json({"message" : error.message})
    }
}