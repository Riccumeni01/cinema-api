import express from 'express'

import { getAllUsers, insertUser } from '../controller/users.js'

const router = express.Router()

router.get('/', getAllUsers)

router.post('/', insertUser)

export default router