import { CharactersMemoryData, MemoryManagerService } from '../../data/services'
import { Character } from '../../domain/models'

export class CMemoryManagerService implements MemoryManagerService {
  private _memoryDB: Character[] = []

  getData(): CharactersMemoryData {
    return {
      characters: this._memoryDB,
    }
  }

  setData(data: CharactersMemoryData): void {
    this._memoryDB.push(...data.characters)
  }
}
