export default function WeatherMapSkeleton() {
  return (
    <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-md p-4 flex flex-col max-2xl:col-span-3'>
      <h2 className='text-sm font-normal mb-2'>
        <div className='h-4 w-24 rounded-lg bg-gray-300 animate-pulse' />
      </h2>
      <div className='w-full h-full rounded-lg overflow-hidden bg-gray-300 animate-pulse' />
    </div>
  )
}
