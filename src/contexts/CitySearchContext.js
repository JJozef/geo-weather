import { createContext } from 'react'

export const SelectedCityContext = createContext({
  SelectedCityToPinned: '',
  setSelectedCityToPinned: () => {}
})
