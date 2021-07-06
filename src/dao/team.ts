import db from "../db"


class TeamDAO {
  async createTeam(team_name: string, team_list: number[]) {
    return await db('teams')
      .insert({
        team_name: team_name,
        team_list: team_list
      })
      .returning('id')
  }

  async getTeam(id: string) {
    return await db('teams')
      .select()
      .where('id', id)
  }

  async getAllTeams() {
    return await db('teams').select()
  }

  async updateTeam(id: string, dto: any) {
    return await db('teams')
      .where('id', '=', id)
      .update(dto)
      .returning('*')
  }

  async deleteTeam(id: string) {
    return await db('teams')
      .where('id', '=', id)
      .delete()
  }
}

const teamDAO = new TeamDAO()

export default teamDAO
