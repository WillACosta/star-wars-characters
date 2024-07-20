import { CharactersDataSource } from '../../data/datasources/characters-datasource'

import {
  PersonNetworkResponse,
  PlanetNetworkModel,
  PlanetNetworkResponse,
} from '../../data/models'

export class FakeCharactersDataSource implements CharactersDataSource {
  async getAllPlanets(page: number): Promise<PlanetNetworkResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return Promise.resolve({
      count: 1,
      next: 'https://swapi.dev/api/planets/?page=2',
      previous: null,
      results: [
        {
          name: 'Tatooine',
          population: '200000',
          residents: [
            'https://swapi.dev/api/people/1/',
            'https://swapi.dev/api/people/2/',
            'https://swapi.dev/api/people/4/',
            'https://swapi.dev/api/people/6/',
            'https://swapi.dev/api/people/7/',
            'https://swapi.dev/api/people/8/',
            'https://swapi.dev/api/people/9/',
            'https://swapi.dev/api/people/11/',
            'https://swapi.dev/api/people/43/',
            'https://swapi.dev/api/people/62/',
          ],
        },
      ],
    } as PlanetNetworkResponse)
  }

  async getPlanetById(id: string): Promise<PlanetNetworkModel> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return Promise.resolve({
      name: 'Tatooine',
      population: '200000',
      residents: ['https://swapi.dev/api/people/1/'],
    } as PlanetNetworkModel)
  }

  async getAllPeople(page: number): Promise<PersonNetworkResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return Promise.resolve({
      count: 1,
      next: 'https://swapi.dev/api/planets/?page=2',
      previous: null,
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          gender: 'male',
          homeworld: 'https://swapi.dev/api/planets/1/',
          url: 'https://swapi.dev/api/people/1/',
        },
      ],
    } as PersonNetworkResponse)
  }
}
