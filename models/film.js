import mongoose from "mongoose";

const filmSchema = mongoose.Schema({
    poster: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        unique: true
    },
    trailer: {
        type: String,
        require: false,
        unique: true
    },
    plot: {
        type: String,
        require: true,
        unique: false
    },
    cast: {
        type: Array,
        require: false,
        unique: false
    },
    category: {
        type: Array,
        require: true,
        unique: false
    }
})

export const Film = mongoose.model('Film', filmSchema)