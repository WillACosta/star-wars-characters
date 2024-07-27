import { injectable } from 'inversify'

import {
  extractIdFromSWApiResourceUrl,
  safeNetworkApiCall,
} from '@/modules/core/functions'

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
    const id = extractIdFromSWApiResourceUrl(url, 'planets')

    return safeNetworkApiCall<PlanetNetworkModel>(() =>
      fetch(`/api/planets/${id}`, {
        method: 'GET',
      })
    )
  }

  async getAllPeople(page: number): Promise<PersonNetworkModel[]> {
    const { results } = await safeNetworkApiCall<PersonNetworkResponse>(() =>
      fetch(`/api/people?page=${page}`, {
        method: 'GET',
      })
    )

    return results
  }

  async getAllPlanets(page: number): Promise<PlanetNetworkModel[]> {
    const { results } = await safeNetworkApiCall<PlanetNetworkResponse>(() =>
      fetch(`/api/planets?page=${page}`, {
        method: 'GET',
      })
    )

    return results
  }
}
