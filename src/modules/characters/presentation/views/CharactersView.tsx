'use client'

import { Button } from '@/components/atoms/Button'
import CardItem from '@/components/atoms/CardItem'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'

import { CharactersContext, useCharactersViewController } from '../controller'
import FilterView from './FilterView'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CharactersView() {
  const {
    loading,
    loadMoreResults,
    planetOptions,
    filterResults,
    filteredCharacters,
    isFiltering,
    setIsFiltering,
  } = useCharactersViewController()

  return (
    <CharactersContext.Provider
      value={{ filteredCharacters, filterResults, setIsFiltering }}
    >
      <section className='mt-12'>
        <FilterView options={planetOptions} />

        <div className='container-fluid mx-auto px-[50px] pb-10 mt-12'>
          <h2 className='text-[34px] font-light mb-5 ease-linear duration-100 text-app-gray-500 animate-fade-up'>
            {isFiltering ? 'Filtered Characters' : 'All Characters'}
          </h2>

          <div className='py-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {filteredCharacters.map(({ id, image, mobileImage, ...rest }) => (
              <CardItem
                key={id}
                image={{ default: image, mobile: mobileImage }}
                {...rest}
              />
            ))}
          </div>

          <div className='flex justify-center'>
            {loading && <LoadingSpinner />}
            {!loading && !isFiltering && (
              <Button
                expanded
                tabIndex={5}
                label='Load More'
                onClick={loadMoreResults}
              />
            )}
          </div>
        </div>
      </section>

      <ToastContainer />
    </CharactersContext.Provider>
  )
}
