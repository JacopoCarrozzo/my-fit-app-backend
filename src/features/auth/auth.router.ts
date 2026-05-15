import { Router } from 'express'
import { register, login } from './auth.controller'
import { protect } from '../../middleware/auth.middleware'
import { register, login, profile } from './auth.controller'


const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/profile', protect, profile)

export default router