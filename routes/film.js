import express from 'express'
import {getAllFilm, getFilmByName, insertFilm} from '../controller/film.js'

const router = express.Router()

router.get('/', getAllFilm)
router.get('/:name', getFilmByName)

router.post('/', insertFilm)

export default router