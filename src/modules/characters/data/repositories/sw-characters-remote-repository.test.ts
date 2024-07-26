import {
  StarWarsCharactersRemoteRepository,
  StarWarsCharactersRepository,
} from '@/modules/characters/data/repositories'

import { MockData } from '@/modules/core/test/mocks'

describe('StarWarsCharactersRepository Tests', () => {
  let repository: StarWarsCharactersRepository

  beforeEach(() => {
    repository = new StarWarsCharactersRemoteRepository()
  })

  function mockFetchApiCall(callback: () => void) {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(
        jest.fn(() => Promise.resolve({ json: callback })) as jest.Mock
      )
  }

  describe('get Planets', () => {
    test('should return a list of planets with success', async () => {
      mockFetchApiCall(() => Promise.resolve({ results: MockData.planets }))

      const actual = await repository.getAllPlanets(1)
      expect(actual).toBe(MockData.planets)
    })

    test('should thrown an error if something went wrong', () => {
      mockFetchApiCall(() => {
        throw new Error('message')
      })

      expect(repository.getAllPlanets(1)).rejects.toThrow(
        'Request complete with an error: Error: message'
      )
    })
  })

  describe('get People', () => {
    test('should return a list of people', async () => {
      mockFetchApiCall(() =>
        Promise.resolve({
          count: 1,
          next: 'https://swapi.dev/api/planets/?page=2',
          previous: null,
          results: [],
        })
      )

      const actual = await repository.getAllPeople(1)
      expect(actual).toEqual([])
    })

    test('should thrown an error if something went wrong', () => {
      mockFetchApiCall(() => {
        throw new Error('message')
      })

      expect(repository.getAllPeople(1)).rejects.toThrow(
        'Request complete with an error: Error: message'
      )
    })
  })

  describe('get Planet', () => {
    test('should get a planet by id and call data source method with correct id', () => {
      mockFetchApiCall(() => Promise.resolve(MockData.planets[0]))

      expect(
        repository.getPlanetDetails('https://swapi.dev/api/planets/1/')
      ).resolves.toEqual(MockData.planets[0])
    })

    test('should thrown an error if something went wrong', () => {
      mockFetchApiCall(() => {
        throw new Error('message')
      })

      expect(
        repository.getPlanetDetails('https://swapi.dev/api/planets/1/')
      ).rejects.toThrow('Request complete with an error: Error: message')
    })
  })
})
