import { Router, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { teamController } from '../controllers'

dotenv.config()

const router = Router()

// Base Controller (TODO: Replace with API docs)
router.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).json('Hello!')
  } catch (err: any) {
    throw(err)
  }
})

// Team Controllers
router.post('/teams/create', teamController.create)
router.get('/teams', teamController.getAllT)
router.get('/teams/:id', teamController.get)
router.post('/teams/update/:id', teamController.update)
router.post('/teams/delete/:id', teamController.delete)

export {
  router
}
