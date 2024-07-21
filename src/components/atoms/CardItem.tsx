import Image from 'next/image'

import { getShimmerPlaceholderForImage, useScreenSize } from '../utils'

type CardItemProps = {
  image: {
    default: string
    mobile: string
  }
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
  const { screenSize } = useScreenSize()

  return (
    <div
      className='flex flex-col mb-8 max-sm:flex-row animate-fade-up'
      tabIndex={4}
    >
      {screenSize.width <= 640 ? (
        <Image
          className='mb-4 w-full max-sm:w-[115px] max-sm:h-[130px] max-sm:mr-3'
          placeholder={getShimmerPlaceholderForImage(115, 130)}
          alt='Image representing a character'
          width={115}
          height={130}
          src={image.mobile}
        />
      ) : (
        <Image
          className='mb-4 w-full'
          placeholder={getShimmerPlaceholderForImage(400, 200)}
          alt='Image representing a character'
          width={400}
          height={200}
          src={image.default}
        />
      )}

      <div className='py-[13px]'>
        <p className='text-[20px] text-black'>{name}</p>
        <p className='text-[16px] text-black'>{homeWorld}</p>
      </div>

      <ul className='text-muted max-sm:hidden'>
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
