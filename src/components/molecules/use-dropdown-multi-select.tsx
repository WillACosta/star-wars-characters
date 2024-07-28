import { ChangeEvent, useEffect, useRef, useState } from 'react'

import CloseIcon from '@/components/atoms/CloseIcon'
import { DropdownOption } from './DropdownMultiSelect'

export function useDropdownMultiSelect() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<DropdownOption[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const [isFiltering, setIsFiltering] = useState<boolean>(false)

  const searchRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSearchValue('')
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  useEffect(() => {
    function handleEvent(e: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowMenu(false)
      }
    }

    window.addEventListener('click', handleEvent as any)
    return () => {
      window.removeEventListener('click', handleEvent as any)
    }
  }, [])

  useEffect(() => {
    if (selectedValue.length > 0) {
      setIsFiltering(true)
    } else {
      setIsFiltering(false)
    }
  }, [selectedValue])

  function toggleMenuVisibility() {
    setShowMenu(!showMenu)
  }

  function getInputDisplayValue(
    placeHolder: string,
    onChange: (value: DropdownOption[]) => void
  ) {
    if (
      !selectedValue ||
      (Array.isArray(selectedValue) && selectedValue.length === 0)
    ) {
      return placeHolder
    }

    return (
      <div className='flex flex-wrap gap-1'>
        {selectedValue.map((option: DropdownOption) => (
          <div
            key={option.value}
            className='bg-app-gray-100 py-[2px] px-1 rounded items-center flex dark:bg-app-gray-500'
          >
            {option.label}
            <span onClick={(e) => onTagRemove(e as any, option, onChange)}>
              <CloseIcon />
            </span>
          </div>
        ))}
      </div>
    )
  }

  function removeOption(option: DropdownOption) {
    return selectedValue.filter((o) => o.value !== option.value)
  }

  function onTagRemove(
    event: MouseEvent,
    option: DropdownOption,
    onChange: (value: DropdownOption[]) => void
  ) {
    event.stopPropagation()

    const currentItem = removeOption(option)
    setSelectedValue(currentItem)
    onChange(currentItem)
  }

  function onSelectItem(
    option: DropdownOption,
    onChange: (value: DropdownOption[]) => void
  ) {
    let newItem

    if (selectedValue.findIndex((el) => el.value === option.value) >= 0) {
      newItem = removeOption(option)
    } else {
      newItem = [...selectedValue, option]
    }

    setSelectedValue(newItem)
    onChange(newItem)
  }

  function isItemSelected(option: DropdownOption) {
    return selectedValue.filter((o) => o.value === option.value).length > 0
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }

  function getCurrentOptions(options: DropdownOption[]) {
    if (!searchValue) {
      return options
    }

    return options.filter((option) => {
      return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    })
  }

  return {
    showMenu,
    searchValue,
    toggleMenuVisibility,
    getInputDisplayValue,
    onSelectItem,
    isItemSelected,
    handleSearch,
    getCurrentOptions,
    inputRef,
    searchRef,
    setSelectedValue,
    isFiltering,
  }
}
