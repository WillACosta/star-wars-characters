import { useEffect, useState } from 'react'

import { DropdownOption } from '@/components/molecules'
import { useAppToast } from '@/components/utils'
import { DI_TYPES } from '@/modules/characters/di/di-types'
import { AppDIContainer } from '@/modules/core'

import { Character } from '../../../domain/models'

import {
  GetAvailablePlanetsUseCase,
  GetCharactersUseCase,
} from '@/modules/characters'

export function useCharactersViewController() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>()
  const [planetOptions, setPlanetOptions] = useState<string[]>()
  const [isFiltering, setIsFiltering] = useState<boolean>()

  const { showToast } = useAppToast()

  const getCharactersUseCase = AppDIContainer.get<GetCharactersUseCase>(
    DI_TYPES.GetCharactersUseCase
  )

  const getAvailablePlanetsUseCase =
    AppDIContainer.get<GetAvailablePlanetsUseCase>(
      DI_TYPES.GetAvailablePlanetsUseCase
    )

  useEffect(() => {
    async function loadMoreResults() {
      try {
        setLoading(true)

        const characters = await getCharactersUseCase.execute(page)
        const availablePlanets = getAvailablePlanetsUseCase.execute(characters)

        setPlanetOptions(availablePlanets)
        setCharacters(characters)
        setFilteredCharacters(characters)
      } catch {
        showToast({
          type: 'error',
          message: 'Oops! Something went wrong, try again later!',
        })
      } finally {
        setLoading(false)
      }
    }

    loadMoreResults()
  }, [page])

  function loadMoreResults() {
    setPage((old) => old + 1)
  }

  function filterResults(items: DropdownOption[]) {
    const filteredItems = characters.filter((char) =>
      items.find((item) => item.value === char.homeWorld.toLowerCase())
    )

    setFilteredCharacters(filteredItems)
  }

  return {
    characters,
    loading,
    loadMoreResults,
    planetOptions,
    filteredCharacters,
    filterResults,
    isFiltering,
    setIsFiltering,
  }
}
