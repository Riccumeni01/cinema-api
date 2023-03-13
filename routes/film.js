import express from 'express'
import {getAllFilm, getFilmById, getFilmWithFilter, insertFilm} from '../controller/film.js'

const router = express.Router()

// TODO: chiedere se è meglio creare un endpoint apposta per i filtri o farli direttamente dove c'è il listing
router.get('/', getAllFilm)
router.get('/filter/', getFilmWithFilter)
router.get('/:id', getFilmById)

router.post('/', insertFilm)

export default router