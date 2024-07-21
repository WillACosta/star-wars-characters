import { SyncUseCase } from '@/modules/core/types'
import { Character } from '../models'

type UseCaseType = SyncUseCase<Character[], string[]>

export const getAvailablePlanetsUseCase = (): UseCaseType => {
  return {
    execute: (characters: Character[]) => {
      return characters.reduce((prev, current) => {
        if (!prev.includes(current.homeWorld)) {
          prev.push(current.homeWorld)
        }

        return prev
      }, [] as string[])
    },
  }
}
