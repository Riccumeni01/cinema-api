import mongoose from "mongoose";
import { Users } from "../models/users.js"

export const getAllUsers = async (req, res) => {
    try{
        const users = await Users.find()
        res.status(200).json(users)
    }catch(error){
        res.status(404).json({"message" : error.message})
    }
}

export const insertUser = async (req, res) => {
    const user = new Users(req.body)
    try{
        await user.save()

        res.status(201).json({"message" : "utente aggiunto"})
    }catch(error){
        res.status(400).json({"message" : error.message})
    }
}