/* eslint-disable multiline-ternary */
/* eslint-disable camelcase */
import { DateTimeIcon, LocationPinned } from '../icons'
import TodaySkeleton from './skeleton/today'

/* eslint-disable @next/next/no-img-element */
export default function TodayCard({ currentWeather }) {
  const { country, name, localtime } = currentWeather?.today?.location || {}
  const { date } = currentWeather?.todayMore?.forecast?.forecastday[0] || {}
  const { temp_c } = currentWeather?.today?.current || {}
  const { text, icon } = currentWeather?.today?.current?.condition || {}

  const hour = new Date(localtime)
  const formattedHour = hour.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  })

  const hourOfDay = hour.getHours()
  const amOrPm = hourOfDay >= 12 ? 'PM' : 'AM'

  return (
    <>
      {name ? (
        <div className='bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-md p-4 flex flex-col px-5 w-full max-md:col-span-3 max-md:row-span-full'>
          <div className='flex flex-col'>
            <img
              className='w-16 h-16'
              src={icon}
              alt={text}
              fetchpriority='high'
            />
            <h2 className='text-6xl font-normal mt-2'>
              {temp_c}
              <sup className='text-3xl'>ºC</sup>
            </h2>
            <div className='flex items-center gap-1 mt-5'>
              <img className='w-5 h-5 object-cover' src={icon} alt={text} />
              <p className='text-sm font-normal'>{text}</p>
            </div>
          </div>
          <div className='h-[1px] bg-slate-50 bg-opacity-20 rounded my-6' />
          <div className='flex items-center gap-1'>
            <LocationPinned className='w-5 h-auto' />
            <p className='text-sm font-normal'>{`${name}, ${country}`}</p>
          </div>
          <footer className='flex items-center gap-1 mt-3'>
            <DateTimeIcon className='w-5 h-auto' />
            <p className='text-sm font-normal'>
              {date}
              <span className='font-medium ml-1'>
                {formattedHour} {amOrPm}
              </span>
            </p>
          </footer>
        </div>
      ) : (
        <TodaySkeleton />
      )}
    </>
  )
}
