import { StarWarsCharactersRepository } from '../../domain/repositories'
import { CharactersDataSource } from '../datasources/characters-datasource'
import { PersonNetworkModel, PlanetNetworkModel } from '../models'

export class CStarWarsCharactersRepository
  implements StarWarsCharactersRepository
{
  dataSource: CharactersDataSource

  constructor(dataSource: CharactersDataSource) {
    this.dataSource = dataSource
  }

  getPlanet(url: string): Promise<PlanetNetworkModel> {
    try {
      const id = url.split('https://swapi.dev/api/planets/')[1].replace('/', '')
      return this.dataSource.getPlanetById(id)
    } catch (error) {
      throw new Error('Something went wrong!')
    }
  }

  async getAllPeople(page: number): Promise<PersonNetworkModel[]> {
    try {
      const { results } = await this.dataSource.getAllPeople(page)
      return results
    } catch (error) {
      throw new Error('Something went wrong!')
    }
  }

  async getAllPlanets(page: number): Promise<PlanetNetworkModel[]> {
    try {
      const { results } = await this.dataSource.getAllPlanets(page)
      return results
    } catch (error) {
      throw new Error('Something went wrong!')
    }
  }
}
