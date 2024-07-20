import { MockData } from '@/modules/core/test/mocks'
import { getCharactersUseCase } from './get-characters-usecase'

class MockStarWarsCharactersRepository {
  getAllPlanets = jest.fn()
  getAllPeople = jest.fn()
  getPlanet = jest.fn()
}

describe('GetCharactersUseCase Tests', () => {
  let repository: MockStarWarsCharactersRepository

  beforeEach(() => {
    repository = new MockStarWarsCharactersRepository()
  })

  test('should throw an error if page value is less or equal to 0 and not call repository methods', () => {
    expect(() => getCharactersUseCase(repository).execute(0)).rejects.toThrow(
      'Invalid page'
    )

    expect(repository.getPlanet).not.toHaveBeenCalled()
    expect(repository.getAllPeople).not.toHaveBeenCalled()
  })

  test('should return a list of characters normally', async () => {
    repository.getAllPeople.mockResolvedValue(MockData.people)
    repository.getPlanet.mockResolvedValue(MockData.planets[0])

    const actual = await getCharactersUseCase(repository).execute(1)

    expect(actual).toEqual([
      {
        image: 'https://picsum.photos/400/200',
        name: 'Anakin S.',
        height: '172',
        mass: '77',
        gender: 'MALE',
        homeWorld: 'Tatooine',
      },
    ])
  })

  test('should thrown an error if something went wrong', () => {
    repository.getAllPeople.mockRejectedValue(
      new Error('Something went wrong!')
    )

    expect(() => getCharactersUseCase(repository).execute(1)).rejects.toThrow(
      'Something went wrong!'
    )
  })
})
