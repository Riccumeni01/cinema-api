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