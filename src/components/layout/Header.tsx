export default function Header() {
  return (
    <div className='container-fluid mx-auto px-[50px] mt-[30px]'>
      <h1 className='text-[32px] md:text-[54px] lg:text-[54px] font-light'>
        Star Wars Characters
      </h1>
      <p className='sm:text-base md:text-[22px] lg:text-[22px] font-light mt-6 text-muted'>
        Browse for your favorite characters from the Star Wars universe. You can
        also filter the results by name or planet.
      </p>
    </div>
  )
}
