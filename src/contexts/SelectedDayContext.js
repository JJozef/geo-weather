import { createContext } from 'react'

export const SelectedDayContext = createContext({
  selectedDayIndex: null,
  setSelectedDayIndex: () => {}
})
