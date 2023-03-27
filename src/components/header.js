import { HomeIcon, NewsIcon, SearchIcon, SettingsIcon } from './icons'
import ButtonHeader from './buttonHeader'
import Link from 'next/link'
import SearchCity from './searchCity'
import { useState } from 'react'
export default function Header() {
  const [isShowSearch, setIsShowSearch] = useState(false)

  const handleSearchClick = () => {
    setIsShowSearch(true)
  }

  const handleCloseSearch = () => {
    setIsShowSearch(false)
  }

  return (
    <>
      <header className='flex flex-col bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 text-white px-2 py-1 mx-2 my-2 rounded-xl'>
        <h1 className='uppercase py-1 font-extrabold text-4xl text-center'>
          SkySavvy
        </h1>
        <div className='flex justify-center items-center gap-5'>
          <Link
            href='/'
            className='hover:bg-gray-50 hover:bg-opacity-5 px-4 py-1 rounded transition-colors duration-200 ease-in-out'
            title='Back to home'
          >
            <HomeIcon className='w-7 h-auto' />
          </Link>
          <ButtonHeader title='Search city' onClick={handleSearchClick}>
            <SearchIcon className='w-7 h-auto' />
          </ButtonHeader>
          <ButtonHeader title='View the news'>
            <NewsIcon className='w-7 h-auto' />
          </ButtonHeader>
          <ButtonHeader title='Settings page'>
            <SettingsIcon className='w-7 h-auto' />
          </ButtonHeader>
        </div>
      </header>
      {isShowSearch && <SearchCity onClose={handleCloseSearch} />}
    </>
  )
}
