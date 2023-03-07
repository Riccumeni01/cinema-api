import express from 'express'
import {getShow} from '../controller/shows.js'

const router = express.Router()

router.get('/:id', getShow)

export default router