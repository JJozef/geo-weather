/* eslint-disable multiline-ternary */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable camelcase */
import {
  FeelsLikeIcon,
  HumidityIcon,
  SunriseIcon,
  SunsetIcon,
  WindDegreeIcon,
  WindIcon
} from '../icons'
import TodayHiliSkeleton from './skeleton/todayHlSkeleton'

export default function TodayHighLight({ currentWeather }) {
  const { wind_kph, humidity, feelslike_c, wind_degree } =
    currentWeather?.today?.current || {}
  const { sunrise, sunset } =
    currentWeather?.todayMore?.forecast?.forecastday[0].astro || {}

  const todayForecast = currentWeather?.todayMore?.forecast?.forecastday[0].hour

  return (
    <>
      {todayForecast ? (
        <div className='bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-md p-4 flex flex-col max-2xl:col-span-2 max-md:col-span-3'>
          <h2 className='text-sm font-normal mb-2'>Today's HighLight</h2>
          <div className='grid grid-cols-4 gap-3 max-2xl:grid-cols-2 max-2xl:grid-rows-2'>
            <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1'>
              <h3 className='text-xs font-semibold text-gray-300'>Wind</h3>
              <div className='mt-3 flex items-center gap-1'>
                <WindIcon className='w-5 h-auto' />
                <p className='text-2xl font-normal'>
                  {wind_kph}
                  <span className='text-[10px] font-bold text-gray-300 ml-1'>
                    km/h
                  </span>
                </p>
              </div>
            </div>
            <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 '>
              <h3 className='text-xs font-semibold text-gray-300'>Humidity</h3>
              <div className='mt-3 flex items-center gap-1'>
                <HumidityIcon className='w-5 h-auto' />
                <p className='text-2xl font-normal'>
                  {humidity}
                  <span className='text-[10px] font-bold text-gray-300'>%</span>
                </p>
              </div>
            </div>
            <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1'>
              <h3 className='text-xs font-semibold text-gray-300'>
                Feels like
              </h3>
              <div className='mt-3 flex items-center gap-1'>
                <FeelsLikeIcon className='w-5 h-auto' />
                <p className='text-2xl font-normal'>{feelslike_c}º</p>
              </div>
            </div>
            <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 '>
              <h3 className='text-xs font-semibold text-gray-300'>
                Wind Degree
              </h3>
              <div className='mt-3 flex items-center gap-1'>
                <WindDegreeIcon className='w-5 h-auto' />
                <p className='text-2xl font-normal'>{wind_degree}º</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 mt-3 gap-3 max-md:grid-cols-1 max-md:grid-rows-2'>
            <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1'>
              <h3 className='text-xs font-semibold text-gray-300'>Sunrise</h3>
              <div className='mt-3 flex items-center gap-1'>
                <SunriseIcon className='w-5 h-auto' />
                <p className='text-2xl font-normal'>{sunrise}</p>
              </div>
            </div>
            <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1'>
              <h3 className='text-xs font-semibold text-gray-300'>Sunset</h3>
              <div className='mt-3 flex items-center gap-1'>
                <SunsetIcon className='w-5 h-auto' />
                <p className='text-2xl font-normal'>{sunset}</p>
              </div>
            </div>
          </div>
          <div className='w-full flex gap-2 bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 mt-3 overflow-x-auto overflow-y-hidden'>
            {todayForecast?.map((hour) => {
              const date = new Date(hour?.time)
              const hourString = `${date.getHours()}:${(
                '0' + date.getMinutes()
              ).slice(-2)}`
              return (
                <div
                  key={hour.time}
                  className='flex items-center text-center bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-md border-white border-opacity-5 border-2 px-2 py-2'
                >
                  <div className='flex flex-col w-16 justify-center items-center'>
                    <img
                      className='w-7 h-auto object-fill'
                      src={hour.condition.icon}
                      alt={hour.condition.text}
                    />
                    <span className='text-sm font-semibold'>{hourString}</span>
                    <span className='text-xs font-medium mt-1 text-gray-300 mb-1'>
                      {hour.temp_c}ºC
                    </span>
                    <span className='w-full text-xs font-medium text-gray-300 whitespace-["break-spaces"] h-10'>
                      {hour.condition.text}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <TodayHiliSkeleton />
      )}
    </>
  )
}
