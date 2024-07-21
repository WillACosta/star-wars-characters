import ArrowIcon from '@/components/atoms/ArrowIcon'
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
    selectedValue,
  } = useDropdownMultiSelect()

  function clearFilters() {
    setSelectedValue([])
    onClearAllFilters?.()
  }

  return (
    <div className='flex justify-between w-full'>
      <div className='text-left border-border border-b relative w-[300px]'>
        <div
          ref={inputRef}
          onClick={toggleMenuVisibility}
          className='p-1 flex items-center justify-between select-none'
        >
          {getInputDisplayValue(placeHolder, onChange)}
          <ArrowIcon />
        </div>

        {showMenu && (
          <div className='absolute translate-x-1 w-full border border-border bg-white rounded overflow-auto max-h-[300px]'>
            <div className='p-1 bg-[#ededed]'>
              <input
                className='w-full p-1 border border-border rounded'
                onChange={handleSearch}
                value={searchValue}
                ref={searchRef}
              />
            </div>

            {getCurrentOptions(options).map((option: DropdownOption) => (
              <div
                onClick={() => onSelectItem(option, onChange)}
                key={option.value}
                className={`p-1 cursor-pointer ${
                  isItemSelected(option) && 'bg-primary text-white'
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <Button
        className='max-sm:hidden'
        label='clear all'
        disabled={selectedValue.length === 0}
        onClick={clearFilters}
      />
    </div>
  )
}
