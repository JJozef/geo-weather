export default function ForecastDaySkeleton() {
  return (
    <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 max-lg:col-span-3 animate-pulse'>
      <div className='flex justify-between gap-3'>
        <div className='mt-2'>
          <div className='h-4 w-20 bg-gray-400 rounded' />
          <div className='mt-1'>
            <div className='h-3 w-32 bg-gray-400 rounded mt-1' />
          </div>
          <div className='mt-3 flex flex-col'>
            <div className='flex items-center gap-1'>
              <div className='w-5 h-5 bg-gray-400 rounded-full' />
              <div className='h-4 w-16 bg-gray-400 rounded' />
            </div>
            <div className='flex items-center gap-1 mt-1'>
              <div className='w-5 h-5 bg-gray-400 rounded-full' />
              <div className='h-4 w-16 bg-gray-400 rounded' />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center mt-2'>
          <div className='h-10 w-10 bg-gray-400 rounded-full' />
          <div className='flex flex-col justify-center mt-2'>
            <div className='flex items-center gap-1'>
              <div className='h-6 w-20 bg-gray-400 rounded' />
              <div className='h-6 w-6 bg-gray-400 rounded-full' />
            </div>
            <div className='flex items-center gap-1 mt-1'>
              <div className='h-6 w-20 bg-gray-400 rounded' />
              <div className='h-6 w-6 bg-gray-400 rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
