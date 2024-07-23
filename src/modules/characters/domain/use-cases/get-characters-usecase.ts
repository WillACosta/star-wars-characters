import { inject, injectable } from 'inversify'

import { capitalizeFirstLetter } from '@/modules/core/functions'
import { AsyncUseCase } from '@/modules/core/types'

import type { MemoryManagerService } from '../../data/services'
import { DI_TYPES } from '../../di/di-types'
import { Character } from '../models'
import type { StarWarsCharactersRepository } from '../repositories'

type UseCaseType = AsyncUseCase<number, Character[]>

@injectable()
export class GetCharactersUseCase implements UseCaseType {
  constructor(
    @inject(DI_TYPES.StarWarsCharactersRepository)
    private _repository: StarWarsCharactersRepository,

    @inject(DI_TYPES.MemoryManagerService)
    private _memoryManagerService: MemoryManagerService,

    @inject(DI_TYPES.Crypto)
    private _crypto: Crypto
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
      const { name } = await this._repository.getPlanet(person.homeworld)
      const id = this._crypto.randomUUID()

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
}
