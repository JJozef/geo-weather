/* eslint-disable @next/next/no-img-element */
/* eslint-disable camelcase */
import ForecastDaySelectedChatSkeleton from './skeleton/forecastDaySelectedChat'

export default function ForecastDaySelectedChart(weatherData) {
  const { defaultSelectedIndex, selectedDayIndex } = weatherData
  const daySelected =
    weatherData?.currentWeather?.forecast?.forecast?.forecastday[
      selectedDayIndex === null ? defaultSelectedIndex : selectedDayIndex
    ]

  if (!daySelected) {
    return <ForecastDaySelectedChatSkeleton />
  }

  return (
    <>
      {daySelected?.hour.map((hour) => {
        const date = new Date(hour?.time)
        const hourString = `${date.getHours()}:${(
          '0' + date.getMinutes()
        ).slice(-2)}`
        return (
          <div
            key={hour?.time}
            className='flex flex-col items-center text-center bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-md border-white border-opacity-5 border-2 px-2 py-2'
          >
            <img
              className='w-7 h-auto'
              src={hour?.condition?.icon}
              alt={hour?.condition?.text}
              fetchpriority='high'
            />
            <span className='text-sm font-semibold'>{hourString}</span>
            <span className='text-xs font-medium mt-1  text-gray-300'>
              {hour?.temp_c}ºC
            </span>
            <span className='text-xs font-medium  text-gray-300'>
              {hour?.condition?.text}
            </span>
          </div>
        )
      })}
    </>
  )
}
