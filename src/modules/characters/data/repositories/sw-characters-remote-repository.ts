import { injectable } from 'inversify'

import { safeNetworkApiCall } from '@/modules/core/functions'

import {
  PersonNetworkModel,
  PersonNetworkResponse,
  PlanetNetworkModel,
  PlanetNetworkResponse,
} from '../models'

import { StarWarsCharactersRepository } from './sw-characters-repository'

import 'reflect-metadata'

@injectable()
export class StarWarsCharactersRemoteRepository
  implements StarWarsCharactersRepository
{
  private _baseUrl = process.env.APP_SERVER

  async getPlanetDetails(url: string): Promise<PlanetNetworkModel> {
    const id = url.split('https://swapi.dev/api/planets/')[1].replace('/', '')

    return safeNetworkApiCall<PlanetNetworkModel>(() =>
      fetch(`${this._baseUrl}/api/planets?id=${id}`, {
        method: 'GET',
      })
    )
  }

  async getAllPeople(page: number): Promise<PersonNetworkModel[]> {
    const { results } = await safeNetworkApiCall<PersonNetworkResponse>(() =>
      fetch(`${this._baseUrl}/api/people?page=${page}`, {
        method: 'GET',
      })
    )

    return results
  }

  async getAllPlanets(page: number): Promise<PlanetNetworkModel[]> {
    const { results } = await safeNetworkApiCall<PlanetNetworkResponse>(() =>
      fetch(`${this._baseUrl}/api/planets?page=${page}`, {
        method: 'GET',
      })
    )

    return results
  }
}
