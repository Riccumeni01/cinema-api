import mongoose from 'mongoose'
import dotenv from 'dotenv'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: false
    },
    surname: {
        type: String,
        require: true,
        unique: false
    },
    birthday: {
        type: Date,
        require: true,
        unique: false
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: false
    },
    permission: {
        type: String,
        require: true,
        unique: false
    }
})

export const Users = mongoose.model('Users', userSchema)