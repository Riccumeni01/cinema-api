import express from 'express'
import {getAllFilm, getFilmById, getFilmByName, insertFilm} from '../controller/film.js'

const router = express.Router()

router.get('/', getAllFilm)
router.get('/:name', getFilmByName)
// router.get('/:id', getFilmById)

router.post('/', insertFilm)

export default router