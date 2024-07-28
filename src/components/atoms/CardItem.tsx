import Image from 'next/image'
import { getShimmerPlaceholderForImage } from '../utils'

type CardItemProps = {
  image: string
  name: string
  height: string
  mass: string
  gender: string
  homeWorld: string
}

export default function CardItem({
  image,
  name,
  height,
  mass,
  gender,
  homeWorld,
}: CardItemProps) {
  return (
    <div
      className='flex flex-col mb-8 max-sm:flex-row animate-fade-up'
      tabIndex={4}
    >
      <Image
        className='mb-4 w-full max-sm:w-[115px] max-sm:mr-3 rounded-md'
        placeholder={getShimmerPlaceholderForImage(400, 200)}
        alt='Image representing a character'
        width={400}
        height={200}
        src={image}
      />

      <div className='py-[13px]'>
        <p className='text-[20px] text-app-gray-500 dark:text-app-gray-100'>
          {name}
        </p>
        <p className='text-[16px] text-app-gray-500 dark:text-app-gray-100'>
          {homeWorld}
        </p>
      </div>

      <ul className='text-muted dark:text-app-gray-300 max-sm:hidden'>
        <li className='flex items-center'>
          <span className='mr-2 after'>HEIGHT</span>
          <span className='w-1 h-1 mr-2 bg-muted rounded-full'></span>
          <span>{height}</span>
        </li>

        <li className='flex items-center'>
          <span className='mr-2 after'>MASS</span>
          <span className='w-1 h-1 mr-2 bg-muted rounded-full'></span>
          <span>{mass}</span>
        </li>

        <li className='flex items-center'>
          <span className='mr-2 after'>GENDER</span>
          <span className='w-1 h-1 mr-2 bg-muted rounded-full'></span>
          <span>{gender}</span>
        </li>
      </ul>
    </div>
  )
}
