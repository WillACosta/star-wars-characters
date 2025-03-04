import { useContext, useMemo } from 'react'

import Divider from '@/components/atoms/Divider'
import DropdownMultiSelect from '@/components/molecules/DropdownMultiSelect'

import { CharactersContext } from '../controller'

type FilterViewProps = {
  options?: string[]
}

export default function FilterView({ options = [] }: FilterViewProps) {
  const filterData = useMemo(() => {
    return options.map((option) => ({
      value: option.toLowerCase(),
      label: option,
    }))
  }, [options])

  const { filterResults } = useContext(CharactersContext)

  function handleClearFilters() {
    filterResults([])
  }

  return (
    <>
      <Divider hideInMobile={false} />

      <div className='container-fluid mx-auto px-[50px] max-sm:px-3'>
        <div className='flex items-center justify-between w-full py-[26px]'>
          <label
            className='mr-3 w-[200px] max-sm:w-auto text-app-gray-500 dark:text-app-gray-100'
            tabIndex={0}
          >
            Filter By Planet(s):
          </label>

          <DropdownMultiSelect
            placeHolder='All'
            options={filterData}
            onChange={filterResults}
            onClearAllFilters={handleClearFilters}
          />
        </div>
      </div>

      <Divider hideInMobile />
    </>
  )
}
