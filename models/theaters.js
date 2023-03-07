import mongoose from 'mongoose'

const theaterSchema = mongoose.Schema({
    piano: {
        type: Number,
        require: true,
        unique: true
    },
    posti: {
        type: Number,
        require: true,
        unique: false
    }
})

export const Theater = mongoose.model('Theater', theaterSchema)