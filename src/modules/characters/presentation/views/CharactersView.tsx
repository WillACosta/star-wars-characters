'use client'

import { Button } from '@/components/atoms/Button'
import CardItem from '@/components/atoms/CardItem'
import Filter from '../components/Filter'

type CharactersViewProps = {}

export default function CharactersView({}: CharactersViewProps) {
  const characters = [
    {
      image: 'https://picsum.photos/400/200',
      name: 'Darth Vader',
      height: '172',
      mass: '77',
      gender: 'Male',
      planet: 'Tatooine',
    },
    {
      image: 'https://picsum.photos/400/200',
      name: 'Leia Organa',
      height: '172',
      mass: '77',
      gender: 'N/A',
      planet: 'Alderaan',
    },
    {
      image: 'https://picsum.photos/400/200',
      name: 'C3PO',
      height: '172',
      mass: '77',
      gender: 'Male',
      planet: 'Tatooine',
    },
    {
      image: 'https://picsum.photos/400/200',
      name: 'BB8',
      height: '172',
      mass: '77',
      gender: 'N/A',
      planet: 'Alderaan',
    },
    {
      image: 'https://picsum.photos/400/200',
      name: 'Darth Vader',
      height: '172',
      mass: '77',
      gender: 'Male',
      planet: 'Tatooine',
    },
    {
      image: 'https://picsum.photos/400/200',
      name: 'Leia Organa',
      height: '172',
      mass: '77',
      gender: 'N/A',
      planet: 'Alderaan',
    },
    {
      image: 'https://picsum.photos/400/200',
      name: 'C3PO',
      height: '172',
      mass: '77',
      gender: 'Male',
      planet: 'Tatooine',
    },
    {
      image: 'https://picsum.photos/400/200',
      name: 'BB8',
      height: '172',
      mass: '77',
      gender: 'N/A',
      planet: 'Alderaan',
    },
  ]

  return (
    <section className='mt-12'>
      <Filter />

      <div className='container-fluid mx-auto px-[50px] pb-10 mt-12'>
        <h2 className='text-[34px] font-light mb-5'>All Characters</h2>

        <div className='py-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          {characters.map(({ image, name, height, mass, gender, planet }) => (
            <CardItem
              key={name}
              image={image}
              name={name}
              height={height}
              mass={mass}
              gender={gender}
              planet={planet}
            />
          ))}
        </div>

        <div className='flex justify-center'>
          <Button label='Load More' />
        </div>
      </div>
    </section>
  )
}
