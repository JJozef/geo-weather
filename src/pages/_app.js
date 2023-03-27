import '@/styles/globals.css'
import { SelectedDayContext } from '@/contexts/SelectedDayContext'
import { SelectedCityContext } from '@/contexts/CitySearchContext'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedDayIndex, setSelectedDayIndex] = useState(null)
  const [defaultSelectedIndex] = useState(0)

  return (
    <SelectedDayContext.Provider
      value={{ selectedDayIndex, setSelectedDayIndex, defaultSelectedIndex }}
    >
      <SelectedCityContext.Provider
        value={{
          SelectedCityToPinned: selectedCity,
          setSelectedCityToPinned: setSelectedCity
        }}
      >
        <Component {...pageProps} />
      </SelectedCityContext.Provider>
    </SelectedDayContext.Provider>
  )
}
