import { ThemeSwitcher } from '../molecules/ThemeSwitcher'

export default function Header() {
  return (
    <div className='container-fluid mx-auto px-[50px] max-sm:px-3 mt-[30px] animate-fade-up flex justify-between items-start'>
      <div className='flex flex-col gap-[25px] max-w-[900px]'>
        <h1 className='text-[32px] md:text-[54px] lg:text-[54px] font-light text-app-gray-500 dark:text-app-gray-100'>
          Star Wars Characters
        </h1>
        <p className='sm:text-base md:text-[22px] lg:text-[22px] font-light text-app-gray-400 dark:text-app-gray-300'>
          Browse for your favorite characters from the Star Wars universe. You
          can also filter the results by planet name.
        </p>
      </div>

      <div className='mt-5'>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
