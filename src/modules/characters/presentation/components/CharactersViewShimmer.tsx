import Shimmer from '@/components/layout/Shimmer'

export default function CharactersViewShimmer() {
  const fakeItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <section className='mt-12 p-2'>
      <Shimmer className='w-full h-20' />

      <div className='container-fluid mx-auto px-[50px] pb-10 mt-12'>
        <Shimmer className='w-[200px] h-10 mb-5' />

        <div className='py-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          {fakeItems.map((i) => (
            <div key={i} className='flex flex-col mb-8 max-sm:flex-row'>
              <Shimmer className='w-full h-[200px] max-sm:w-[115px] max-sm:mr-3' />
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
          <Shimmer className='w-[200px] mb-5 h-10' />
        </div>
      </div>
    </section>
  )
}
