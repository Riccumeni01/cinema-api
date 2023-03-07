import mongoose from "mongoose";

const filmSchema = mongoose.Schema({
    locandina: {
        type: String,
        require: true,
        unique: true
    },
    nome: {
        type: String,
        require: true,
        unique: true
    },
    trailer: {
        type: String,
        require: false,
        unique: true
    },
    trama: {
        type: String,
        require: true,
        unique: false
    },
    cast: {
        type: Array,
        require: false,
        unique: false
    },
    genere: {
        type: Array,
        require: true,
        unique: false
    }
})

export const Film = mongoose.model('Film', filmSchema)