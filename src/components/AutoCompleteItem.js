/* eslint-disable multiline-ternary */
import { PointerSelectIcon } from './icons'
import { motion } from 'framer-motion'
import { SelectedCityContext } from '@/contexts/CitySearchContext'
import { useContext } from 'react'

export default function AutoCompleteItem({ city }) {
  const { setSelectedCityToPinned } = useContext(SelectedCityContext)
  return (
    <>
      {city.length > 0 ? (
        city.map((cityItem) => {
          const { id, name, region, country } = cityItem

          return (
            <motion.div
              key={`item-${id}`}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className='w-full flex justify-between items-center px-2 border-2 rounded-md border-textPrimary hover:bg-textPrimary hover:text-yellow-500 hover:ring-2 hover:ring-yellow-500 hover:ring-opacity-20 font-semibold'
                onClick={() =>
                  setSelectedCityToPinned(`${name}, ${region}, ${country}`)
                }
              >
                {name}
                {region && `, ${region}`}
                {country && `, ${country}`}
                <PointerSelectIcon className='w-4 h-auto' strokeW='4' />
              </button>
            </motion.div>
          )
        })
      ) : (
        <p>No hay datos</p>
      )}
    </>
  )
}
