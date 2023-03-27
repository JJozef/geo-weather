import { DateTimeIcon, LocationPinned } from '@/components/icons'

export default function TodaySkeleton() {
  return (
    <div className='bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-md p-4 flex flex-col px-5 w-full max-md:col-span-3 max-md:row-span-full'>
      <div className='flex flex-col'>
        <div className='w-16 h-16 bg-white animate-pulse rounded-full' />
        <h2 className='text-6xl font-normal mt-2'>
          <span className='bg-white animate-pulse h-10 w-24 block' />
        </h2>
        <div className='flex items-center gap-1 mt-5'>
          <div className='w-5 h-5 bg-white animate-pulse rounded-full' />
          <p className='text-sm font-normal'>
            <span className='bg-white animate-pulse h-3 w-20 block' />
          </p>
        </div>
      </div>
      <div className='h-[1px] bg-white bg-opacity-20 rounded my-6' />
      <div className='flex items-center gap-1'>
        <LocationPinned className='w-5 h-auto' />
        <p className='text-sm font-normal'>
          <span className='bg-white animate-pulse h-3 w-20 block' />
        </p>
      </div>
      <footer className='flex items-center gap-1 mt-3'>
        <DateTimeIcon className='w-5 h-auto' />
        <p className='text-sm font-normal'>
          <span className='bg-white animate-pulse h-3 w-20 block' />
        </p>
      </footer>
    </div>
  )
}
