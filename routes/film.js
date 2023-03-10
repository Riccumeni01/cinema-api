import express from 'express'
import {getAllFilm, getFilmById, getFilmWithFilter, insertFilm} from '../controller/film.js'

const router = express.Router()

router.get('/', getAllFilm)
router.get('/filter/', getFilmWithFilter)
router.get('/:id', getFilmById)

router.post('/', insertFilm)

export default router