import { useEffect, useMemo, useRef, useState } from 'react'
import ButtonHeader from './buttonHeader'
import { CloseIcon } from './icons'
import { createAutocomplete } from '@algolia/autocomplete-core'
import AutoCompleteItem from './AutoCompleteItem'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function SearchCity({ onClose }) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: 'Search city',
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: 'cities',
            getItems: ({ query }) => {
              // eslint-disable-next-line no-extra-boolean-cast
              if (!!query) {
                return fetch(`http://localhost:3000/api/search/${query}`).then(
                  (res) => res.json()
                )
              }
            }
          }
        ]
      }),
    []
  )

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <section className='fixed inset-0 z-40 h-screen w-screen bg-bgBody/80'>
      <article className='max-w-7xl w-2/4 m-auto my-5 max-md:w-11/12'>
        <LazyMotion features={domAnimation}>
          <m.div
            className=' bg-textPrimary px-8 py-1 rounded-lg relative'
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='absolute right-1'>
              <ButtonHeader title='Close menu' onClick={onClose}>
                <CloseIcon className='w-7 h-auto' />
              </ButtonHeader>
            </div>
            <h1 className='text-2xl font-medium text-center uppercase py-3'>
              Search City
            </h1>
            <div className='w-full py-3'>
              <form {...formProps} ref={formRef}>
                <div className='w-full'>
                  <input
                    className='w-full py-1 px-2 text-textPrimary font-medium rounded border-2 border-transparent outline-none hover:border-yellow-500 hover:ring-4 hover:ring-yellow-500 hover:ring-opacity-25 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-25 transition-colors duration-300 ease-in-out'
                    type='text'
                    placeholder='Search City'
                    {...inputProps}
                    ref={inputRef}
                  />
                </div>
              </form>
            </div>
            {autocompleteState.isOpen && (
              <div
                className='bg-bgBody py-2 px-2 rounded-md'
                ref={panelRef}
                {...autocomplete.getPanelProps()}
              >
                <div>
                  {autocompleteState.collections.map((collection, index) => {
                    const { items } = collection
                    return (
                      <section key={`section-${index}`}>
                        {items.length > 0 && (
                          <ul
                            className='flex flex-col gap-1'
                            {...autocomplete.getListProps()}
                          >
                            {items.map((item, index) => (
                              <AutoCompleteItem
                                key={`${item.name}-${index}`}
                                {...item}
                              />
                            ))}
                          </ul>
                        )}
                      </section>
                    )
                  })}
                </div>
              </div>
            )}
          </m.div>
        </LazyMotion>
      </article>
    </section>
  )
}
