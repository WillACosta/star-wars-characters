import { capitalizeFirstLetter } from '@/modules/core/functions'
import { AsyncUseCase } from '@/modules/core/types'
import { MemoryManagerService } from '../../data/services'
import { Character } from '../models'
import { StarWarsCharactersRepository } from '../repositories'

type UseCaseType = AsyncUseCase<number, Character[]>

export const getCharactersUseCase = (
  repository: StarWarsCharactersRepository,
  memoryManagerService: MemoryManagerService,
  crypto: Crypto = window.crypto
): UseCaseType => {
  async function mapNetworkDataToDomain(page: number): Promise<Character[]> {
    let results: Character[] = []
    const people = await repository.getAllPeople(page)

    for (const person of people) {
      const { name } = await repository.getPlanet(person.homeworld)
      const id = crypto.randomUUID()

      results.push({
        id,
        image: `https://picsum.photos/seed/${id}/400/200`,
        mobileImage: `https://picsum.photos/seed/${id}/115/130`,
        name: person.name,
        height: capitalizeFirstLetter(person.height),
        mass: capitalizeFirstLetter(person.mass),
        gender: person.gender.toUpperCase(),
        homeWorld: capitalizeFirstLetter(name),
      })
    }

    return results
  }

  return {
    execute: async (page: number) => {
      if (page <= 0) throw new Error('Invalid page')

      const results = await mapNetworkDataToDomain(page)

      memoryManagerService.setData({ characters: results })
      const { characters } = memoryManagerService.getData()

      return characters
    },
  }
}
