/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
import BarChart from '../chart'
import { CloudRainIcon, FeelsLikeIcon, WindIcon } from '../icons'
import ForecastDayChartSkeleton from './skeleton/forecastDayChart'

export default function ForecastDayChart(weatherData) {
  const { defaultSelectedIndex, selectedDayIndex } = weatherData
  const daySelected =
    weatherData?.currentWeather?.forecast?.forecast?.forecastday[
      selectedDayIndex === null ? defaultSelectedIndex : selectedDayIndex
    ]
  const { avgtemp_c, maxwind_kph, daily_chance_of_rain } =
    daySelected?.day || {}
  const { text, icon } = daySelected?.day?.condition || {}
  const dayJsonChart = daySelected?.hour || {}
  const dayChart = Array.isArray(dayJsonChart)
    ? dayJsonChart.map((item) => {
        return {
          time: item.time,
          temp_c: item.temp_c
        }
      })
    : []

  if (!dayChart?.length) {
    return <ForecastDayChartSkeleton />
  }

  return (
    <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 mt-2'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <h3 className='text-xl font-semibold'>Sunday</h3>
            <h4 className='text-sm font-semibold text-gray-300'>{text}</h4>
            <div className='flex items-center gap-1 mt-2'>
              <WindIcon className='w-5 h-auto' />
              <p className='text-xl font-normal'>
                {maxwind_kph}
                <span className='text-[10px] font-bold text-gray-300 ml-1'>
                  km/h
                </span>
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <CloudRainIcon className='w-5 h-auto' />
              <p className='text-xl font-normal'>
                {daily_chance_of_rain}
                <span className='text-[10px] font-bold text-gray-300 ml-1'>
                  %
                </span>
              </p>
            </div>
          </div>
          <div>
            <img className='w-16 h-16' src={icon} alt={text} />
            <div className='flex items-center gap-1 mt-2'>
              <h4 className='text-6xl font-normal'>
                {avgtemp_c}
                <sup className='text-2xl'>ºC</sup>
              </h4>
              <FeelsLikeIcon className='w-10 h-auto' />
            </div>
          </div>
        </div>
        <div className='w-full h-full mt-3'>
          <BarChart dayChart={dayChart} />
        </div>
      </div>
    </div>
  )
}
