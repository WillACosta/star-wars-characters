import Image from 'next/image'
import { getShimmerPlaceholderForImage } from '../utils'

type CardItemProps = {
  image: string
  name: string
  height: string
  mass: string
  gender: string
  planet: string
}

export default function CardItem({
  image,
  name,
  height,
  mass,
  gender,
  planet,
}: CardItemProps) {
  return (
    <div className='flex flex-col mb-8 max-sm:flex-row'>
      <Image
        className='mb-4 w-full max-sm:w-[115px] max-sm:h-[130px] max-sm:mr-3'
        placeholder={getShimmerPlaceholderForImage(400, 200)}
        alt='Image representing a character'
        width={400}
        height={200}
        src={image}
      />

      <div className='py-[13px]'>
        <p className='text-[20px]'>{name}</p>
        <p className='text-[16px]'>{planet}</p>
      </div>

      <ul className='text-gray max-sm:hidden'>
        <li className='flex items-center'>
          <span className='mr-2 after'>HEIGHT</span>
          <span className='w-1 h-1 mr-2 bg-gray rounded-full'></span>
          <span>{height}</span>
        </li>

        <li className='flex items-center'>
          <span className='mr-2 after'>MASS</span>
          <span className='w-1 h-1 mr-2 bg-gray rounded-full'></span>
          <span>{mass}</span>
        </li>

        <li className='flex items-center'>
          <span className='mr-2 after'>GENDER</span>
          <span className='w-1 h-1 mr-2 bg-gray rounded-full'></span>
          <span>{gender}</span>
        </li>
      </ul>
    </div>
  )
}
