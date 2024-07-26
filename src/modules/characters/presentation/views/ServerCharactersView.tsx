import { AppDIContainer } from '@/modules/core'
import { DI_TYPES } from '../../di/di-types'

import {
  GetAvailablePlanetsUseCase,
  GetCharactersUseCase,
} from '../../domain/use-cases'

import CharactersView from './CharactersView'

export default async function ServerCharactersView() {
  const getCharactersUseCase = AppDIContainer.get<GetCharactersUseCase>(
    DI_TYPES.GetCharactersUseCase
  )

  const getAvailablePlanetsUseCase =
    AppDIContainer.get<GetAvailablePlanetsUseCase>(
      DI_TYPES.GetAvailablePlanetsUseCase
    )

  const characters = await getCharactersUseCase.execute(1)
  const availablePlanets = getAvailablePlanetsUseCase.execute(characters)

  return (
    <CharactersView characters={characters} planetOptions={availablePlanets} />
  )
}
