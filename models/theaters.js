import mongoose from 'mongoose'

const theaterSchema = mongoose.Schema({
    floor: {
        type: Number,
        require: true,
        unique: true
    },
    seats: {
        type: Number,
        require: true,
        unique: false
    }
})

export const Theater = mongoose.model('Theater', theaterSchema)