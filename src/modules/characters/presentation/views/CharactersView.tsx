'use client'

import { Button } from '@/components/atoms/Button'
import CardItem from '@/components/atoms/CardItem'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'

import { CharactersContext, useCharactersViewController } from '../utils'
import FilterView from './FilterView'

export default function CharactersView() {
  const {
    loading,
    loadMoreResults,
    planets,
    filterResults,
    filteredCharacters,
  } = useCharactersViewController()

  return (
    <CharactersContext.Provider value={{ filteredCharacters, filterResults }}>
      <section className='mt-12'>
        <FilterView options={planets} />

        <div className='container-fluid mx-auto px-[50px] pb-10 mt-12'>
          <h2 className='text-[34px] font-light mb-5'>All Characters</h2>

          <div className='py-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {filteredCharacters.map(
              ({ id, image, name, height, mass, gender, homeWorld }) => (
                <CardItem
                  key={id}
                  image={image}
                  name={name}
                  height={height}
                  mass={mass}
                  gender={gender}
                  planet={homeWorld}
                />
              )
            )}
          </div>

          <div className='flex justify-center'>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Button label='Load More' onClick={loadMoreResults} />
            )}
          </div>
        </div>
      </section>
    </CharactersContext.Provider>
  )
}
