import { PersonNetworkResponse, PlanetNetworkResponse } from '../models'

export class FakeApiService {
  async getAllPlanets(page: number): Promise<PlanetNetworkResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return Promise.resolve({
      count: 1,
      next: 'https://swapi.dev/api/planets/?page=2',
      previous: null,
      results: [],
    } as PlanetNetworkResponse)
  }

  async getAllPeople(page: number): Promise<PersonNetworkResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return Promise.resolve({
      count: 1,
      next: 'https://swapi.dev/api/planets/?page=2',
      previous: null,
      results: [],
    } as PersonNetworkResponse)
  }
}
