'use client'

import Button from '@/components/atoms/Button'
import CardItem from '@/components/atoms/CardItem'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import ToastContainer from '@/components/atoms/ToastContainer'

import { Character } from '../../domain/models'
import FilterView from './FilterView'

type CharactersViewProps = {
  characters: Character[]
  planetOptions?: string[]
}

export default function CharactersView({
  characters,
  planetOptions,
}: CharactersViewProps) {
  // const {
  //   loading,
  //   loadMoreResults,
  //   planetOptions: options,
  //   filterResults,
  //   // filteredCharacters,
  //   isFiltering,
  //   setIsFiltering,
  // } = useCharactersViewController()

  return (
    // <CharactersContext.Provider
    //   value={{ filteredCharacters: characters, filterResults, setIsFiltering }}
    // >
    <>
      <section className='mt-12'>
        <FilterView options={planetOptions} />

        <div className='container-fluid mx-auto px-[50px] pb-10 mt-12'>
          <h2 className='text-[34px] font-light mb-5 ease-linear duration-100 text-app-gray-500 animate-fade-up'>
            {false ? 'Filtered Characters' : 'All Characters'}
          </h2>

          <div className='py-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {characters.map(({ id, image, mobileImage, ...rest }) => (
              <CardItem
                key={id}
                image={{ default: image, mobile: mobileImage }}
                {...rest}
              />
            ))}
          </div>

          <div className='flex justify-center'>
            {false && <LoadingSpinner />}
            {!false && !false && (
              <Button expanded tabIndex={5} label='Load More' />
            )}
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
    // </CharactersContext.Provider>
  )
}
