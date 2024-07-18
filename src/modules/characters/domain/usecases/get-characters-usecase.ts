import { AsyncUseCase } from '@/modules/core/types'
import { Character } from '../models'
import { StarWarsCharactersRepository } from '../repositories'

type UseCaseType = AsyncUseCase<string, Character[]>

export const getCharactersUseCase = (
  repository: StarWarsCharactersRepository
): UseCaseType => {
  return {
    execute: async (page: string) => {
      const currentPage = Number(page.length == 0 ? '1' : page)
      if (isNaN(currentPage)) throw new Error('Invalid page')

      const people = await repository.getAllPeople(currentPage)
      const planets = await repository.getAllPlanets(currentPage)

      const planetOf = (people: string) => {
        return planets.find((e) => e.residents.includes(people))?.name
      }

      const result: Character[] = people.map((person) => {
        return {
          image: 'https://picsum.photos/200',
          name: person.name,
          height: Number(person.height),
          mass: Number(person.mass),
          gender: person.gender,
          homeWorld: planetOf(person.url) ?? 'not found',
        }
      })

      return result
    },
  }
}
