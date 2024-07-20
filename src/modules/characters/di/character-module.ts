import { CStarWarsCharactersRepository } from '../data/repositories'
import { CCharactersDataSource } from '../infra/datasources'
import { CMemoryManagerService } from '../infra/services'

const charactersDataSource = new CCharactersDataSource()
export const memoryManagerService = new CMemoryManagerService()
export const charactersRepository = new CStarWarsCharactersRepository(
  charactersDataSource
)
