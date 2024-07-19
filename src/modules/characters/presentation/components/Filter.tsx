import { Button } from '@/components/atoms/Button'
import Divider from '@/components/atoms/Divider'

type FilterProps = {}

export default function Filter({}: FilterProps) {
  return (
    <>
      <Divider hideInMobile={false} />

      <div className='container-fluid mx-auto px-[50px]'>
        <div className='flex flex-row items-center justify-between w-full py-[26px]'>
          <div>
            <label className='text-muted mr-3'>Filter By:</label>
            <input
              id='filter-by'
              type='text'
              className='border border-b border-border'
            />
          </div>

          <Button className='max-sm:hidden' label='clear all' disabled={true} />
        </div>
      </div>

      <Divider hideInMobile />
    </>
  )
}
