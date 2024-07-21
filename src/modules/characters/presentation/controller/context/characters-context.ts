import { DropdownOption } from '@/components/molecules'
import { createContext } from 'react'
import { Character } from '../../../domain/models'

export const CharactersContext = createContext<{
  filteredCharacters: Character[]
  filterResults: (items: DropdownOption[]) => void
  setIsFiltering: (value: boolean) => void
}>({
  filteredCharacters: [],
  filterResults: () => {},
  setIsFiltering: (_: boolean) => {},
})
