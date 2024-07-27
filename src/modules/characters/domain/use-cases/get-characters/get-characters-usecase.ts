import { inject, injectable } from 'inversify'

import { DI_TYPES } from '@/modules/characters/di/di-types'
import {
  capitalizeFirstLetter,
  extractIdFromSWApiResourceUrl,
} from '@/modules/core/functions'
import { AsyncUseCase } from '@/modules/core/types'

import type { StarWarsCharactersRepository } from '@/modules/characters/data/repositories'
import type { MemoryManagerService } from '@/modules/characters/data/services'

import { Character } from '../../models'

type UseCaseType = AsyncUseCase<number, Character[]>

@injectable()
export class GetCharactersUseCase implements UseCaseType {
  constructor(
    @inject(DI_TYPES.StarWarsCharactersRepository)
    private _repository: StarWarsCharactersRepository,

    @inject(DI_TYPES.MemoryManagerService)
    private _memoryManagerService: MemoryManagerService
  ) {}

  async execute(params: number): Promise<Character[]> {
    if (params <= 0) throw new Error('Invalid page')
    const results = await this._mapNetworkDataToDomain(params)

    this._memoryManagerService.setData({ characters: results })
    const { characters } = this._memoryManagerService.getData()

    return characters
  }

  private async _mapNetworkDataToDomain(page: number): Promise<Character[]> {
    let results: Character[] = []
    const people = await this._repository.getAllPeople(page)

    for (const person of people) {
      const { name } = await this._repository.getPlanetDetails(person.homeworld)
      const id = extractIdFromSWApiResourceUrl(person.url, 'people')

      results.push({
        id,
        image: `/images/characters/${id}.jpg`,
        name: person.name,
        height: capitalizeFirstLetter(person.height),
        mass: capitalizeFirstLetter(person.mass),
        gender: person.gender.toUpperCase(),
        homeWorld: capitalizeFirstLetter(name),
      })
    }

    return results
  }
}
