export default function ForecastDayChartSkeleton() {
  return (
    <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 mt-2 pt-2'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h3 className='w-28 h-5 animate-pulse bg-gray-300 rounded-md mb-2' />
            <h4 className='w-24 h-4 animate-pulse bg-gray-300 rounded-md' />
            <div className='flex items-center gap-2 mt-3'>
              <div className='w-5 h-6 animate-pulse bg-gray-300 rounded-md' />
              <p className='w-16 h-6 animate-pulse bg-gray-300 rounded-md' />
            </div>
            <div className='flex items-center gap-2 mt-3'>
              <div className='w-5 h-6 animate-pulse bg-gray-300 rounded-md' />
              <p className='w-16 h-6 animate-pulse bg-gray-300 rounded-md' />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-16 h-16 mb-2'>
              <div className='w-full h-full animate-pulse bg-gray-300 rounded-full' />
            </div>
            <div className='flex items-center gap-1 mt-2'>
              <h4 className='w-20 h-10 animate-pulse bg-gray-300 rounded-md' />
              <div className='w-6 h-10 animate-pulse bg-gray-300 rounded' />
            </div>
          </div>
        </div>
        <div className='w-full h-full mt-3'>
          <div className='w-full h-48 animate-pulse bg-gray-300 rounded-md' />
        </div>
      </div>
    </div>
  )
}
