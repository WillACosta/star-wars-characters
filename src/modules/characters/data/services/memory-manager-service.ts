import { Character } from '../../domain/models'

export type CharactersMemoryData = {
  characters: Character[]
}

export interface MemoryManagerService {
  getData(): CharactersMemoryData
  setData(data: CharactersMemoryData): void
}
