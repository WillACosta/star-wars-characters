import { ContainerModule, interfaces } from 'inversify'

import { CharactersDataSource } from '../data/data-sources/characters-datasource'
import { CStarWarsCharactersRepository } from '../data/repositories'
import { MemoryManagerService } from '../data/services'
import { StarWarsCharactersRepository } from '../domain/repositories'

import {
  GetAvailablePlanetsUseCase,
  GetCharactersUseCase,
} from '../domain/use-cases'

import { CCharactersDataSource } from '../infra/data-sources'
import { FakeCharactersDataSource } from '../infra/data-sources/fake-characters-datasource'
import { CMemoryManagerService } from '../infra/services'
import { DI_TYPES } from './di-types'

function initializeModule(bind: interfaces.Bind) {
  const env = process.env.NODE_ENV

  if (env === 'test') {
    bind<CharactersDataSource>(DI_TYPES.CharactersDataSource).to(
      FakeCharactersDataSource
    )
  } else {
    bind<CharactersDataSource>(DI_TYPES.CharactersDataSource).to(
      CCharactersDataSource
    )
  }

  bind<MemoryManagerService>(DI_TYPES.MemoryManagerService).to(
    CMemoryManagerService
  )

  bind<StarWarsCharactersRepository>(DI_TYPES.StarWarsCharactersRepository).to(
    CStarWarsCharactersRepository
  )

  bind<GetCharactersUseCase>(DI_TYPES.GetCharactersUseCase).to(
    GetCharactersUseCase
  )

  bind<GetAvailablePlanetsUseCase>(DI_TYPES.GetAvailablePlanetsUseCase).to(
    GetAvailablePlanetsUseCase
  )

  bind<Crypto>(DI_TYPES.Crypto).toConstantValue(crypto)
}

export const CharactersModule = new ContainerModule(initializeModule)
