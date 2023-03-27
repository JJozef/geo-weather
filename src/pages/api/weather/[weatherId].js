export default async function handler(req, res) {
  const { weatherId } = req.query
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_WEATHER_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  const todayDate = getTodayDate()

  const today = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${weatherId}`,
    options
  )
  const todayInfo = await fetch(
    `https://weatherapi-com.p.rapidapi.com/history.json?q=${weatherId}&dt=${todayDate}&lang=en`,
    options
  )
  const forescast = await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${weatherId}&days=3`,
    options
  )

  const todayData = await today.json()
  const todayInfoData = await todayInfo.json()
  const forescastData = await forescast.json()

  res
    .status(200)
    .json({
      today: todayData,
      todayMore: todayInfoData,
      forecast: forescastData
    })
}

function getTodayDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = ('0' + (today.getMonth() + 1)).slice(-2)
  const day = ('0' + today.getDate()).slice(-2)
  return `${year}-${month}-${day}`
}
