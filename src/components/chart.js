/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto' // eslint-disable-line
import ChartSkeleton from './cards/skeleton/chart'

const BarChart = ({ dayChart }) => {
  const [weatherChartData, setWeatherChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Temperature',
        data: [],
        backgroundColor: 'white',
        borderColor: '#ffaa00',
        borderWidth: 1
      }
    ]
  })

  useEffect(() => {
    if (dayChart && dayChart.length) {
      setWeatherChartData((prevData) => ({
        ...prevData,
        labels: dayChart.map(({ time }) => time.split(' ')[1]),
        datasets: [
          {
            ...prevData.datasets[0],
            data: dayChart.map(({ temp_c }) => temp_c)
          }
        ]
      }))
    }
  }, [dayChart])

  if (!dayChart?.length) {
    return <ChartSkeleton />
  }

  return <Line data={weatherChartData} options={{ aspectRatio: false }} />
}

export default BarChart
