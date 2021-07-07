import { Router, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { teamController } from '../controllers'

dotenv.config()

const router = Router()

// Base Controller (TODO: Replace with API docs)
router.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).json({
      'POST -> /teams/create': {
        description: 'Creates a new team',
        body_params: {
          team_name: 'string',
          team_list: 'number[]'
        }
      },
      'GET -> /teams': {
        description: 'Displays all created teams',
      },
      'GET -> /teams/:id': {
        description: 'Displays a single team, based on ID',
        url_params: {
          id: 'string'
        }
      },
      'POST -> /teams/update/:id': {
        description: 'Updates a single team, based on ID',
        url_params: {
          id: 'string'
        },
        body_params: {
          team_name: 'string',
          team_list: 'number[]'
        }
      },
      'POST -> /teams/delete/:id': {
        description: 'Deletes a single team, based on ID',
        url_params: {
          id: 'string'
        },
        body_params: {
          team_name: 'string',
          team_list: 'number[]'
        }
      },
    })
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
