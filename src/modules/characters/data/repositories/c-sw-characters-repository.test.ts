import { MockData, MockPlanetDataSource } from '@/modules/core/test/mocks'
import { StarWarsCharactersRepository } from '../../domain/repositories'
import { CStarWarsCharactersRepository } from './c-sw-characters-repository'

describe('StarWarsCharactersRepository Tests', () => {
  let repository: StarWarsCharactersRepository
  let dataSource: MockPlanetDataSource

  beforeEach(() => {
    dataSource = new MockPlanetDataSource()
    repository = new CStarWarsCharactersRepository(dataSource)
  })

  describe('get Planets', () => {
    test('should return a list of planets', async () => {
      dataSource.getAllPlanets.mockResolvedValue({
        count: 1,
        next: 'https://swapi.dev/api/planets/?page=2',
        previous: null,
        results: [],
      })

      const actual = await repository.getAllPlanets(1)
      expect(actual).toEqual([])
    })

    test('should thrown an error if something went wrong', () => {
      dataSource.getAllPlanets.mockRejectedValue(
        new Error('Something went wrong!')
      )

      expect(repository.getAllPlanets(1)).rejects.toThrow(
        'Something went wrong!'
      )
    })
  })

  describe('get People', () => {
    test('should return a list of people', async () => {
      dataSource.getAllPeople.mockResolvedValue({
        count: 1,
        next: 'https://swapi.dev/api/planets/?page=2',
        previous: null,
        results: [],
      })

      const actual = await repository.getAllPeople(1)
      expect(actual).toEqual([])
    })

    test('should thrown an error if something went wrong', () => {
      dataSource.getAllPlanets.mockRejectedValue(
        new Error('Something went wrong!')
      )

      expect(repository.getAllPeople(1)).rejects.toThrow(
        'Something went wrong!'
      )
    })
  })

  describe('get Planet', () => {
    test('should get a planet by id and call data source method with correct id', () => {
      dataSource.getPlanetById.mockResolvedValue(MockData.planets[0])

      repository.getPlanet('https://swapi.dev/api/planets/1/')

      expect(dataSource.getPlanetById).toHaveBeenCalledWith('1')
    })

    test('should thrown an error if something went wrong', () => {
      dataSource.getPlanetById.mockRejectedValue(
        new Error('Something went wrong!')
      )

      expect(
        repository.getPlanet('https://swapi.dev/api/planets/1/')
      ).rejects.toThrow('Something went wrong!')
    })
  })
})
