'use client'

import Button from '@/components/atoms/Button'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import ToastContainer from '@/components/atoms/ToastContainer'

import CharactersList from '../components/CharactersList'
import { CharactersContext, useCharactersViewController } from '../controller'
import FilterView from './FilterView'

export default function CharactersView() {
  const {
    loading,
    loadMoreResults,
    planetOptions,
    filterResults,
    filteredCharacters,
    isFiltering,
    setIsFiltering,
    characters,
  } = useCharactersViewController()

  return (
    <CharactersContext.Provider
      value={{ filteredCharacters, filterResults, setIsFiltering }}>
      <section className='mt-12'>
        <FilterView options={planetOptions} />

        <div className='container-fluid mx-auto px-[50px] pb-10 mt-12'>
          <h2 className='text-[34px] font-light mb-5 ease-linear duration-100 text-app-gray-500 animate-fade-up'>
            {isFiltering ? 'Filtered Characters' : 'All Characters'}
          </h2>

          {isFiltering ? (
            <CharactersList items={filteredCharacters} />
          ) : (
            <CharactersList items={characters} />
          )}

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
