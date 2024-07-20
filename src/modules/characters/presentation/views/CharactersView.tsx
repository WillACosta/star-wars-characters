'use client'

import { Button } from '@/components/atoms/Button'
import CardItem from '@/components/atoms/CardItem'
import { useEffect, useState } from 'react'
import { charactersRepository } from '../../di/character-module'
import { Character } from '../../domain/models'
import { getCharactersUseCase } from '../../domain/usecases'
import Filter from '../components/Filter'

type CharactersViewProps = {}

export default function CharactersView({}: CharactersViewProps) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function loadMoreResults() {
      setCharacters(
        await getCharactersUseCase(charactersRepository).execute(page)
      )
    }

    loadMoreResults()
  }, [page])

  function nextPage() {
    setPage((old) => old + 1)
  }

  return (
    <section className='mt-12'>
      <Filter />

      <div className='container-fluid mx-auto px-[50px] pb-10 mt-12'>
        <h2 className='text-[34px] font-light mb-5'>All Characters</h2>

        <div className='py-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          {characters.map(
            ({ image, name, height, mass, gender, homeWorld }) => (
              <CardItem
                key={name}
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
          <Button label='Load More' onClick={nextPage} />
        </div>
      </div>
    </section>
  )
}
