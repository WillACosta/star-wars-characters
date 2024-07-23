import { inject, injectable } from 'inversify'

import { DI_TYPES } from '../../di/di-types'
import { StarWarsCharactersRepository } from '../../domain/repositories'
import type { CharactersDataSource } from '../data-sources/characters-datasource'
import { PersonNetworkModel, PlanetNetworkModel } from '../models'

import 'reflect-metadata'

@injectable()
export class CStarWarsCharactersRepository
  implements StarWarsCharactersRepository
{
  constructor(
    @inject(DI_TYPES.CharactersDataSource)
    private _dataSource: CharactersDataSource
  ) {}

  getPlanet(url: string): Promise<PlanetNetworkModel> {
    try {
      const id = url.split('https://swapi.dev/api/planets/')[1].replace('/', '')
      return this._dataSource.getPlanetById(id)
    } catch (error) {
      throw new Error('Something went wrong!')
    }
  }

  async getAllPeople(page: number): Promise<PersonNetworkModel[]> {
    try {
      const { results } = await this._dataSource.getAllPeople(page)
      return results
    } catch (error) {
      throw new Error('Something went wrong!')
    }
  }

  async getAllPlanets(page: number): Promise<PlanetNetworkModel[]> {
    try {
      const { results } = await this._dataSource.getAllPlanets(page)
      return results
    } catch (error) {
      throw new Error('Something went wrong!')
    }
  }
}
