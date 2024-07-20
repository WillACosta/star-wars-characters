import { CStarWarsCharactersRepository } from '../data/repositories'
import { CCharactersDataSource } from '../infra/datasources'

const charactersDataSource = new CCharactersDataSource()
export const charactersRepository = new CStarWarsCharactersRepository(
  charactersDataSource
)
