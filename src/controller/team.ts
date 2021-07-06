import { Request, Response } from 'express'
import teamService from '../service/team'

class TeamController {
  async create(req: Request, res: Response) {
    try {
      const id = await teamService.create(req.body)
      res.status(201).json(id)
    } catch (err: any) {
      throw(err)
    }
  }

  async get(req: Request, res: Response) {
    try {
      const team = await teamService.get(req.params.id)
      res.status(201).json(team)
    } catch (err: any) {
      throw err
    }
  }

  async getAllT(req: Request, res: Response) {
    try {
      const teams = await teamService.getAllT()
      res.status(201).json(teams)
    } catch (err: any) {
      throw(err)
    }
  }

  async update(req: Request, res: Response) {
    try {
      const team = await teamService.update(req.params.id, req.body)
      res.status(201).json(team)
    } catch (err: any) {
      throw(err)
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await teamService.delete(req.params.id)
      res.status(201).json(`Successfully deleted ${req.params.id}`)
    } catch (err: any) {
      throw(err)
    }
  }
}

const teamController = new TeamController()

export default teamController
