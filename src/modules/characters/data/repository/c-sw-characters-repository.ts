import { StarWarsCharactersRepository } from '../../domain/repositories'
import { PersonNetworkModel, PlanetNetworkModel } from '../models'
import { FakeApiService } from './fake-api'

export class CStarWarsCharactersRepository
  implements StarWarsCharactersRepository
{
  dataSource: FakeApiService

  constructor(dataSource: FakeApiService) {
    this.dataSource = dataSource
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
