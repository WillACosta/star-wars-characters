import { ContainerModule, interfaces } from 'inversify'

import {
  GetAvailablePlanetsUseCase,
  GetCharactersUseCase,
} from '../domain/use-cases'

import { DI_TYPES } from './di-types'

import {
  StarWarsCharactersFakeRepository,
  StarWarsCharactersRemoteRepository,
  StarWarsCharactersRepository,
} from '../data/repositories'

import { MemoryManagerService } from '../data/services'
import { CMemoryManagerService } from '../data/services/c-memory-manager-service'

function initializeModule(bind: interfaces.Bind) {
  const env = process.env.NODE_ENV

  if (env === 'test') {
    bind<StarWarsCharactersRepository>(
      DI_TYPES.StarWarsCharactersRepository
    ).to(StarWarsCharactersFakeRepository)
  } else {
    bind<StarWarsCharactersRepository>(
      DI_TYPES.StarWarsCharactersRepository
    ).to(StarWarsCharactersRemoteRepository)
  }

  bind<MemoryManagerService>(DI_TYPES.MemoryManagerService).to(
    CMemoryManagerService
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
