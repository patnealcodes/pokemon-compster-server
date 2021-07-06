import { Router } from 'express'
import * as dotenv from 'dotenv'
import { teamController } from '../controllers'

dotenv.config()

const router = Router()

router.post('/teams/create', teamController.create)
router.get('/teams', teamController.getAllT)
router.get('/teams/:id', teamController.get)
router.post('/teams/update/:id', teamController.update)
router.post('/teams/delete/:id', teamController.delete)

export {
  router
}
