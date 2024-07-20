import { CharactersDataSource } from '../../data/datasources/characters-datasource'

import {
  PersonNetworkResponse,
  PlanetNetworkModel,
  PlanetNetworkResponse,
} from '../../data/models'

export class CCharactersDataSource implements CharactersDataSource {
  async getAllPlanets(page: number): Promise<PlanetNetworkResponse> {
    const response = await fetch(`/api/planets?page=${page}`, { method: 'GET' })

    const { data } = await response.json()
    return data
  }

  async getPlanetById(id: string): Promise<PlanetNetworkModel> {
    const response = await fetch(`/api/planets?id=${id}`, { method: 'GET' })

    const { data } = await response.json()
    return data
  }

  async getAllPeople(page: number): Promise<PersonNetworkResponse> {
    const response = await fetch(`/api/people?page=${page}`, { method: 'GET' })

    const { data } = await response.json()
    return data
  }
}
