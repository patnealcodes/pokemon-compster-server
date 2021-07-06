import teamDAO from '../dao/team'
import { TeamCreateData } from '../types'

class TeamService {
  create(teamDTO: TeamCreateData) {
    const { team_name, team_list } = teamDTO
    return teamDAO.createTeam(team_name, team_list)
  }

  get(id: string) {
    return teamDAO.getTeam(id)
  }

  getAllT() {
    return teamDAO.getAllTeams()
  }

  update(id: string, teamDTO: TeamCreateData) {
    return teamDAO.updateTeam(id, teamDTO)
  }

  delete(id: string) {
    return teamDAO.deleteTeam(id)
  }
}

const teamService = new TeamService()

export default teamService
