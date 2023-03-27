export default async function handler(req, res) {
  const { cityId } = req.query
  const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${cityId}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_WEATHER_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }
  const searchCity = await fetch(url, options)
  const searchCityData = await searchCity.json()
  res.status(200).json({
    city: searchCityData
  })
}
