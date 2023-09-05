import React, {FC} from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

interface DashboardChartProps {
    chartData: any,
    chartOption?: any
}

const DashboardChart: FC<DashboardChartProps> = ({chartData, chartOption}) => {
  return (
    <div className='shadow-md mt-4 p-5'>
      <Line data={chartData} options={chartOption}/>
    </div>
  )
}

export default DashboardChart