import express from 'express'
import {getAllTheaters} from '../controller/theaters.js'

const router = express.Router()

router.get('/', getAllTheaters)

export default router