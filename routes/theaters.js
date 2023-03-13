import express from 'express'
import {getAllTheaters, insertTheater} from '../controller/theaters.js'

const router = express.Router()

router.get('/', getAllTheaters)

router.post('/', insertTheater)

export default router