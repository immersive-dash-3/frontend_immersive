import React, { FC } from 'react'

interface NavbarProps {
  title: string
}

const Navbar: FC<NavbarProps> = ({title}) => {
  return (
    <div className='lg:flex lg:flex-row lg:w-full lg:justify-between lg:items-center hidden mt-3'>
        <div className='flex flex-col leading-7'>
            <div className='text-[28px] font-bold'>Immersive Program</div>
            <div className='text-[18px]'>{title}</div>
        </div>
        <div>
            <img src="../../public/profile.png" alt="" className='w-14 h-fit'/>
        </div>
    </div>
  )
}

export default Navbar