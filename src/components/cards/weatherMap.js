/* eslint-disable multiline-ternary */
/* eslint-disable @next/next/no-img-element */
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { Suspense } from 'react'
import { GoogleMapStyles } from '../const'
import WeatherMapSkeleton from './skeleton/weatherMap'

export default function WeatherMap({ currentWeather }) {
  const latitude = currentWeather?.today?.location?.lat
  const longitude = currentWeather?.today?.location?.lon
  const position =
    !isNaN(latitude) && !isNaN(longitude)
      ? { lat: latitude, lng: longitude }
      : null

  const mapSkeleton = <WeatherMapSkeleton />

  const MapLoader = ({ children }) => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    if (loadError) return <p className='text-red-500'>Error loading map</p>

    return isLoaded ? children : null
  }

  return (
    <div className='w-full bg-bgBody bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-md p-4 flex flex-col max-2xl:col-span-3 max-md:h-96'>
      <h2 className='text-sm font-normal mb-2'>Weather condition map</h2>
      <Suspense fallback={mapSkeleton}>
        <MapLoader>
          <GoogleMap
            zoom={10}
            center={position}
            mapContainerClassName='w-full h-full rounded-lg overflow-hidden'
            options={{ styles: GoogleMapStyles }}
          >
            <Marker position={position} />
          </GoogleMap>
        </MapLoader>
      </Suspense>
    </div>
  )
}
