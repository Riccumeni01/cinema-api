import mongoose from 'mongoose'

const showSchema = mongoose.Schema({
    utenti: {
        type: Array,
        require: false,
        unique: false
    },
    film: {
        type: Object,
        require: true,
        unique: false,
    },
    dataInizio: {
        type: Object,
        require: true,
        unique: false
    },
    dataInizio: {
        type: Object,
        require: true,
        unique: false
    },
    sala: {
        type: Object,
        require: true,
        unique: false
    }
})

export const Shows = mongoose.model('Shows', showSchema)