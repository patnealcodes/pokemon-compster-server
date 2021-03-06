import db from "../db"

class TeamDAO {
  async createTeam(teamName: string, teamList: number[]) {
    return await db('teams')
      .insert({
        team_name: teamName,
        team_list: teamList
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

export default new TeamDAO()
