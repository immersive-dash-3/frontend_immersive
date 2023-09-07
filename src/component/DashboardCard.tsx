import React, { FC } from 'react'

interface DashboardCardProps {
    label: string,
    count: number
}

const DashboardCard: FC<DashboardCardProps> = ({label, count}) => {
  return (
    <div className='flex flex-col shadow-md rounded-md w-full p-4'>
        <div className='font-light text-[10px] lg:text-[18px] text-end'>Mentee <span className='text-[#36B808]'>{label}</span></div>
        <div className='text-center text-[30px] lg:text-[96px]'>{count} <span className='text-[10px] lg:text-[18px]'>user</span> </div>
    </div>
  )
}

export default DashboardCard