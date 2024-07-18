import { MockData } from '@/modules/core/test/mocks'
import { getCharactersUseCase } from './get-characters-usecase'

class MockStarWarsCharactersRepository {
  getAllPlanets = jest.fn()
  getAllPeople = jest.fn()
}

describe('GetCharactersUseCase Tests', () => {
  let repository: MockStarWarsCharactersRepository

  beforeEach(() => {
    repository = new MockStarWarsCharactersRepository()
  })

  test('should throw an error if page is not a number and not call repository methods', () => {
    expect(() =>
      getCharactersUseCase(repository).execute('notANumber')
    ).rejects.toThrow('Invalid page')

    expect(repository.getAllPlanets).not.toHaveBeenCalled()
    expect(repository.getAllPeople).not.toHaveBeenCalled()
  })

  test('should return a list of characters normally', async () => {
    repository.getAllPeople.mockResolvedValue(MockData.people)
    repository.getAllPlanets.mockResolvedValue(MockData.planets)

    const actual = await getCharactersUseCase(repository).execute('1')

    expect(actual).toEqual([
      {
        image: 'https://picsum.photos/200',
        name: 'Anakin S.',
        height: 1,
        mass: 1,
        gender: 'male',
        homeWorld: 'Tatooine',
      },
    ])
  })

  test('should thrown an error if something went wrong', () => {
    repository.getAllPeople.mockRejectedValue(
      new Error('Something went wrong!')
    )

    expect(() => getCharactersUseCase(repository).execute('1')).rejects.toThrow(
      'Something went wrong!'
    )
  })

  test(`should return not found for homeWorld if planet name is not found in planets list
      and use default value if page is not provided`, async () => {
    repository.getAllPlanets.mockResolvedValue(MockData.planets)
    repository.getAllPeople.mockResolvedValue([
      {
        ...MockData.people[0],
        url: 'https://swapi.dev/api/people/999',
      },
    ])

    const actual = await getCharactersUseCase(repository).execute('')

    expect(actual).toEqual([
      {
        image: 'https://picsum.photos/200',
        name: 'Anakin S.',
        height: 1,
        mass: 1,
        gender: 'male',
        homeWorld: 'not found',
      },
    ])
  })
})
