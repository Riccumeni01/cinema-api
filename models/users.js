import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true,
        unique: false
    },
    cognome: {
        type: String,
        require: true,
        unique: false
    },
    dataNascita: {
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
    permessi: {
        type: String,
        require: true,
        unique: false
    }
})

export const Users = mongoose.model('Users', userSchema)