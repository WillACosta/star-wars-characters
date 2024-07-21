import { KeyboardEvent, useContext, useEffect } from 'react'

import ArrowIcon from '@/components/atoms/ArrowIcon'
import { CharactersContext } from '@/modules/characters/presentation/controller'

import { Button } from '../atoms/Button'
import { useDropdownMultiSelect } from './use-dropdown-multi-select'

export type DropdownOption = {
  label: string
  value: string
}

type DropdownMultiSelectProps = {
  placeHolder: string
  options: DropdownOption[]
  onChange: (value: DropdownOption[]) => void
  onClearAllFilters?: () => void
}

export default function DropdownMultiSelect({
  placeHolder,
  options,
  onChange,
  onClearAllFilters,
}: DropdownMultiSelectProps) {
  const {
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
  } = useDropdownMultiSelect()

  const { setIsFiltering } = useContext(CharactersContext)

  useEffect(() => {
    setIsFiltering(isFiltering)
  }, [isFiltering, setIsFiltering])

  function clearFilters() {
    setSelectedValue([])
    onClearAllFilters?.()
  }

  function handleFilterBoxKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' || e.key === 'Space') {
      toggleMenuVisibility()
    }
  }

  function handleSelectedItemKeyDown(
    e: KeyboardEvent<HTMLOptionElement>,
    option: DropdownOption,
    onChange: (value: DropdownOption[]) => void
  ) {
    if (e.key === 'Enter' || e.key === 'Space') {
      onSelectItem(option, onChange)
    }
  }

  return (
    <div className='flex justify-between w-full'>
      <div className='text-left border-app-gray-200 border-b relative w-[300px]'>
        <div
          tabIndex={1}
          role='listbox'
          ref={inputRef}
          onClick={toggleMenuVisibility}
          onKeyDown={handleFilterBoxKeyDown}
          className='p-1 flex items-center justify-between text-primary'
        >
          {getInputDisplayValue(placeHolder, onChange)}
          <ArrowIcon className={showMenu ? 'rotate-180' : 'rotate-0'} />
        </div>

        {showMenu && (
          <div className='absolute translate-x-1 w-full border border-app-gray-300 bg-white rounded overflow-auto max-h-[300px] z-10 animate-fade-down animate-duration-500'>
            <div className='p-1 bg-app-gray-100'>
              <input
                name='filter'
                className='w-full p-1 border border-app-gray-300 rounded focus:border-primary focus:outline-primary'
                onChange={handleSearch}
                value={searchValue}
                ref={searchRef}
              />
            </div>

            {getCurrentOptions(options).map((option: DropdownOption) => (
              <option
                tabIndex={2}
                key={option.value}
                className={`p-1 cursor-pointer ${
                  isItemSelected(option) && 'bg-primary text-white'
                }`}
                aria-selected={isItemSelected(option)}
                onClick={() => onSelectItem(option, onChange)}
                onKeyDown={(e) =>
                  handleSelectedItemKeyDown(e, option, onChange)
                }
              >
                {option.label}
              </option>
            ))}
          </div>
        )}
      </div>

      <Button
        tabIndex={3}
        className='max-md:hidden'
        label='clear all'
        aria-disabled={!isFiltering}
        disabled={!isFiltering}
        onClick={clearFilters}
      />
    </div>
  )
}
