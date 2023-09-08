import React, { FC } from 'react'

interface NavbarProps {
  title: string
}

const Navbar: FC<NavbarProps> = ({title}) => {
  return (
    <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex flex-col leading-6'>
            <div className='text-[24px] font-bold'>Immersive Program</div>
            <div>{title}</div>
        </div>
        <div>
            <img src="./profile.png" alt="" className='w-14 h-fit'/>
        </div>
    </div>
  )
}

export default Navbar