import mongoose from 'mongoose'
import {Users} from '../models/users.js'
import bcrypt from 'bcryptjs'
import emailValidator from 'email-validator'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({"message" : "bad request"})
    } 

    const user = await Users.findOne({"email" : email})

    if(!user){
        res.status(404).json({"message" : "user not found"})
    }

    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                surname: user.surname
            }, process.env.JWT_SECRET
        )

        return res.status(200).json({"token" : token})
    }

    res.status(401).json({"message" : "email or password wrong"})
}

export const register = async (req, res) => {
    const {name, surname, email, password, birthday} = req.body

    if(!name || typeof name != 'string'){
        res.status(400).json({"message" : "fields not valid"})
    }

    if(!surname || typeof surname != 'string'){
        res.status(400).json({"message" : "fields not valid"})
    }

    if(!birthday || typeof birthday != 'string'){
        res.status(400).json({"message" : "fields not valid"})
    }

    if(emailValidator.validate(email)){
        res.status(400).json({"message" : "fields not valid"})
    }

    if(!password || typeof password != 'string' || password.length < 8){
        res.status(400).json({"message" : "fields not valid"})
    }

    const passwordHashed = await bcrypt.hash(password, 15)

    const user = new Users({"name" : name, "surname" : surname, "birthday" : birthday, "password" : passwordHashed, "email" : email, "permission" : "a"})

    try {
        await user.save()
        res.status(201).json({"message" : "user created"})
    } catch (error) {
        res.status(400)
    }


}