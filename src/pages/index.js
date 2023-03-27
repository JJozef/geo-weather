/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'
import { randomCity } from '@/components/const'
import TodayCard from '@/components/cards/today'
import TodayHighLight from '@/components/cards/todayHighLight'
import WeatherMap from '@/components/cards/weatherMap'
import ForecastDay from '@/components/cards/forecastDay'
import ForecastDayChart from '@/components/cards/forecastDayChart'
import { SelectedDayContext } from '@/contexts/SelectedDayContext'
import ForecastDaySelectedChart from '@/components/cards/forecastDaySelectedChart'
// import { SelectedCityContext } from '@/contexts/CitySearchContext'

import { Inter } from 'next/font/google'
import Header from '@/components/header'
import { SelectedCityContext } from '@/contexts/CitySearchContext'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [weatherData, setWeatherData] = useState([])
  const { name, city, country } = randomCity
  const [cityPinned] = useState(`${city}, ${name}, ${country}`)
  const { selectedDayIndex, defaultSelectedIndex } =
    useContext(SelectedDayContext)
  const { SelectedCityToPinned } = useContext(SelectedCityContext)

  const cityToFetch = SelectedCityToPinned || cityPinned

  useEffect(() => {
    fetchWeatherData(cityToFetch).then((data) => setWeatherData(data))
  }, [cityToFetch])

  async function fetchWeatherData(city) {
    return fetch(`/api/weather/${city}`)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  return (
    <>
      <Head>
        <title>GeoWeather</title>
        <meta name='description' content='GeoWeather' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`max-w-[1400px] m-auto ${inter.className}`}>
        <Header />
        <section className='py-3 px-2'>
          <article className='grid grid-cols-3 place-content-center gap-2 max-2xl:grid-rows-2 max-md:grid-rows-3 my-8'>
            <TodayCard currentWeather={weatherData} />
            <TodayHighLight currentWeather={weatherData} />
            <WeatherMap currentWeather={weatherData} />
          </article>
          <article className='mt-8'>
            <h1 className='text-2xl font-semibold'>Forescast</h1>
            <div className='w-full grid grid-cols-3 gap-1 mt-5 max-lg:grid-rows-3'>
              <ForecastDay currentWeather={weatherData} />
            </div>
            <ForecastDayChart
              currentWeather={weatherData}
              selectedDayIndex={selectedDayIndex}
              defaultSelectedIndex={defaultSelectedIndex}
            />
            <div className='w-full flex gap-1 bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-md px-2 py-1 mt-2 overflow-y-auto'>
              <ForecastDaySelectedChart
                currentWeather={weatherData}
                selectedDayIndex={selectedDayIndex}
                defaultSelectedIndex={defaultSelectedIndex}
              />
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
