/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-curly-newline */
import { useContext } from 'react'
import { SelectedDayContext } from '@/contexts/SelectedDayContext'
import { HumidityIcon, MinusTemp, PlusTemp, WindIcon } from '@/components/icons'
import ForecastDaySkeleton from './skeleton/forecastDay'

export default function ForecastDay({ currentWeather }) {
  const { selectedDayIndex, setSelectedDayIndex, defaultSelectedIndex } =
    useContext(SelectedDayContext)

  const forecast = currentWeather?.forecast?.forecast?.forecastday
  if (!forecast) {
    return (
      <>
        <ForecastDaySkeleton />
        <ForecastDaySkeleton />
        <ForecastDaySkeleton />
      </>
    )
  }
  return (
    <>
      {forecast?.map((day, index) => (
        <div
          key={day.date}
          className='group relative w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 max-lg:col-span-3 hover:bg-bgBody/75 hover:cursor-help hover:ring-4 hover:ring-opacity-10 hover:ring-gray-200 hover:transition-colors duration-500'
          onClick={() =>
            setSelectedDayIndex(
              selectedDayIndex !== null ? index : defaultSelectedIndex
            )
          }
        >
          <div className='group-hover:block hidden absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-yellow-400 py-[6px] px-4 text-sm font-bold text-textPrimary opacity-0 group-hover:opacity-100'>
            <span className='absolute bottom-[-5px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-yellow-400' />
            {selectedDayIndex === index ||
            (selectedDayIndex === null && defaultSelectedIndex === index)
              ? 'Selected day forecast'
              : 'Double click to select'}
          </div>
          <div className='flex justify-between gap-3'>
            <div>
              <div className='flex items-center gap-1'>
                <h3
                  className={`${
                    selectedDayIndex === index ||
                    (selectedDayIndex === null &&
                      defaultSelectedIndex === index)
                      ? 'text-yellow-400 font-bold text-xl'
                      : 'text-xl font-semibold'
                  }`}
                >
                  {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
                    new Date(day.date + 'T00:00:00Z')
                  )}
                </h3>
              </div>
              <p className='text-sm text-gray-300'>{day.day.condition.text}</p>
              <div className='mt-3 flex flex-col'>
                <div className='flex items-center gap-1'>
                  <WindIcon className='w-5 h-auto' />
                  <p className='text-2xl font-normal'>
                    {day.day.maxwind_kph}
                    <span className='text-[10px] font-bold text-gray-300 ml-1'>
                      km/h
                    </span>
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <HumidityIcon className='w-5 h-auto' />
                  <p className='text-2xl font-normal'>
                    {day.day.avghumidity}
                    <span className='text-[10px] font-bold text-gray-300'>
                      %
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <img
                className='w-10 h-10'
                src={day.day.condition.icon}
                alt={day.day.condition.text}
              />
              <div className='flex flex-col justify-center mt-2'>
                <div className='flex items-center gap-1'>
                  <span className='text-xl font-semibold'>
                    {day.day.maxtemp_c}ºC
                  </span>
                  <PlusTemp />
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xl font-medium text-gray-300'>
                    {day.day.mintemp_c}ºC
                  </span>
                  <MinusTemp />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
