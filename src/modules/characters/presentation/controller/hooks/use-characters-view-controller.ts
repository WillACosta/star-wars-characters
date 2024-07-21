import { useEffect, useState } from 'react'

import {
  charactersRepository,
  memoryManagerService,
} from '../../../di/character-module'

import {
  getAvailablePlanetsUseCase,
  getCharactersUseCase,
} from '../../../domain/usecases'

import { DropdownOption } from '@/components/molecules'
import { Character } from '../../../domain/models'

export function useCharactersViewController() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>()
  const [planetOptions, setPlanetOptions] = useState<string[]>()
  const [isFiltering, setIsFiltering] = useState<boolean>()

  useEffect(() => {
    async function loadMoreResults() {
      setLoading(true)

      const characters = await getCharactersUseCase(
        charactersRepository,
        memoryManagerService
      ).execute(page)

      const availablePlanets = getAvailablePlanetsUseCase().execute(characters)

      setPlanetOptions(availablePlanets)
      setCharacters(characters)
      setLoading(false)
    }

    loadMoreResults()
  }, [page])

  useEffect(() => {
    setFilteredCharacters(characters)
  }, [characters])

  function loadMoreResults() {
    setPage((old) => old + 1)
  }

  function filterResults(items: DropdownOption[]) {
    const filteredItems = characters.filter((char) =>
      items.find((item) => item.value === char.homeWorld.toLowerCase())
    )

    setFilteredCharacters(filteredItems.length > 0 ? filteredItems : characters)
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
