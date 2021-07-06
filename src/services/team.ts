import { teamDAO } from '../daos'
import { TeamCreateData } from '../types'

class TeamService {
  create(teamDTO: TeamCreateData) {
    const { teamName, teamList } = teamDTO
    return teamDAO.createTeam(teamName, teamList)
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

export default new TeamService()
