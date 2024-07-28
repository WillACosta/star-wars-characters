import { injectable } from 'inversify'

import { SyncUseCase } from '@/modules/core/types'
import { Character } from '../../models'

import 'reflect-metadata'

type UseCaseType = SyncUseCase<Character[], string[]>

@injectable()
export class GetAvailablePlanetsUseCase implements UseCaseType {
  execute(characters: Character[]) {
    return characters.reduce((prev, current) => {
      if (!prev.includes(current.homeWorld)) {
        prev.push(current.homeWorld)
      }

      return prev
    }, [] as string[])
  }
}
