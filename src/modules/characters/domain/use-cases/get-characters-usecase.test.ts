import {
  MockCrypto,
  MockData,
  MockMemoryManagerService,
  MockStarWarsCharactersRepository,
} from '@/modules/core/test/mocks'

import { GetCharactersUseCase } from './get-characters-usecase'

describe('GetCharactersUseCase Tests', () => {
  let repository: MockStarWarsCharactersRepository
  let memoryManagerService: MockMemoryManagerService
  let crypto: Crypto
  let getCharactersUseCase: GetCharactersUseCase

  beforeEach(() => {
    repository = new MockStarWarsCharactersRepository()
    memoryManagerService = new MockMemoryManagerService()
    crypto = new MockCrypto() as any

    getCharactersUseCase = new GetCharactersUseCase(
      repository,
      memoryManagerService,
      crypto
    )

    setupRequiredMethods()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  function setupRequiredMethods() {
    jest.spyOn(crypto, 'randomUUID').mockReturnValue(MockData.uuid)
  }

  test('should throw an error if page value is less or equal to 0 and not call repository methods', () => {
    expect(() => getCharactersUseCase.execute(0)).rejects.toThrow(
      'Invalid page'
    )

    expect(repository.getPlanet).not.toHaveBeenCalled()
    expect(repository.getAllPeople).not.toHaveBeenCalled()
  })

  test(`should return a list of characters normally
    and call memoryManagerService methods to append new data to the existing list`, async () => {
    const expectedResults = MockData.characters

    repository.getAllPeople.mockResolvedValue(MockData.people)
    repository.getPlanet.mockResolvedValue(MockData.planets[0])
    memoryManagerService.getData.mockReturnValue({
      characters: expectedResults,
    })

    const actual = await getCharactersUseCase.execute(1)

    expect(actual).toEqual(expectedResults)

    expect(memoryManagerService.setData).toHaveBeenCalledWith({
      characters: expectedResults,
    })

    expect(memoryManagerService.getData).toHaveBeenCalled()
  })

  test('should thrown an error if something went wrong', () => {
    repository.getAllPeople.mockRejectedValue(
      new Error('Something went wrong!')
    )

    expect(() => getCharactersUseCase.execute(1)).rejects.toThrow(
      'Something went wrong!'
    )
  })
})
