import { capitalizeFirstLetter } from '@/modules/core/functions'
import { AsyncUseCase } from '@/modules/core/types'
import { Character } from '../models'
import { StarWarsCharactersRepository } from '../repositories'

type UseCaseType = AsyncUseCase<number, Character[]>

export const getCharactersUseCase = (
  repository: StarWarsCharactersRepository
): UseCaseType => {
  return {
    execute: async (page: number) => {
      if (page <= 0) throw new Error('Invalid page')

      let results: Character[] = []
      const people = await repository.getAllPeople(page)

      for (const person of people) {
        const { name } = await repository.getPlanet(person.homeworld)
        results.push({
          image: 'https://picsum.photos/400/200',
          name: person.name,
          height: person.height,
          mass: person.mass,
          gender: person.gender.toUpperCase(),
          homeWorld: capitalizeFirstLetter(name),
        })
      }

      return results
    },
  }
}
