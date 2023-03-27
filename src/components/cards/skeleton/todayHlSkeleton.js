export default function TodayHiliSkeleton() {
  return (
    <div className='bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-md p-4 flex flex-col max-2xl:col-span-2 max-md:col-span-3'>
      <h2 className='text-sm font-normal mb-2'>Today's HighLight</h2>
      <div className='grid grid-cols-4 gap-3 max-2xl:grid-cols-2 max-2xl:grid-rows-2'>
        <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 animate-pulse'>
          <h3 className='text-xs font-semibold text-gray-300'>Wind</h3>
          <div className='mt-3 flex items-center gap-1'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full' />
          </div>
        </div>
        <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 animate-pulse'>
          <h3 className='text-xs font-semibold text-gray-300'>Humidity</h3>
          <div className='mt-3 flex items-center gap-1'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full' />
          </div>
        </div>
        <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 animate-pulse'>
          <h3 className='text-xs font-semibold text-gray-300'>Feels like</h3>
          <div className='mt-3 flex items-center gap-1'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full' />
          </div>
        </div>
        <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 animate-pulse'>
          <h3 className='text-xs font-semibold text-gray-300'>Wind Degree</h3>
          <div className='mt-3 flex items-center gap-1'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 mt-3 gap-3 max-md:grid-cols-1 max-md:grid-rows-2'>
        <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 animate-pulse'>
          <h3 className='text-xs font-semibold text-gray-300'>Sunrise</h3>
          <div className='mt-3 flex items-center gap-1'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full' />
          </div>
        </div>
        <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 animate-pulse'>
          <h3 className='text-xs font-semibold text-gray-300'>Sunset</h3>
          <div className='mt-3 flex items-center gap-1'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full' />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center gap-2 bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 mt-3 overflow-x-auto overflow-y-hidden'>
        <div className='flex items-center text-center bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-md border-white border-opacity-5 border-2 px-2 py-2'>
          <div className='flex flex-col w-16 justify-center items-center'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
          </div>
        </div>
        <div className='flex items-center text-center bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-md border-white border-opacity-5 border-2 px-2 py-2'>
          <div className='flex flex-col w-16 justify-center items-center'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
          </div>
        </div>
        <div className='flex items-center text-center bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-md border-white border-opacity-5 border-2 px-2 py-2'>
          <div className='flex flex-col w-16 justify-center items-center'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
          </div>
        </div>
        <div className='flex items-center text-center bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-md border-white border-opacity-5 border-2 px-2 py-2'>
          <div className='flex flex-col w-16 justify-center items-center'>
            <div className='w-5 h-5 bg-gray-300 rounded-full' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
            <div className='w-full h-4 bg-gray-300 rounded-full mt-1' />
          </div>
        </div>
      </div>
    </div>
  )
}
