import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Tablementee from '../../../component/Tablementee'
import Sidebar from '../../../component/Sidebar'
import Navbar from '../../../component/Navbar'
import Inputsearch from '../../../component/Inputsearch'
import Button from '../../../component/Button'
import Dropdown from '../../../component/Dropdown'


const index = () => {
  return (
    <section className='flex flex-row'>
        <div className="w-20vw h-[100vh]">
          <Sidebar/>
        </div>
        <div className="w-[80vw] ml-[20vw] px-10 py-5">
          <Navbar title='Menteelist'/>
          <div className='my-10 pl-[19rem]'>
            <Inputsearch/>
          </div>
          <div className='flex flex-row gap-x-5'>
            <Button label='Export' classNames={`bg-search mr-[4vw] ml-[14vw] mb-[2vw] mt-[-1vw]`}/>
            <span className='mt-2'>
            <Dropdown
              placeholder="Class"
              name='QA3'
              name2='BE7'
              name3='FE6'
            />
            </span>
            <span className='mt-2'>
             <Dropdown
               placeholder="Status"
               name='Active'
               name2='Placement'
               name3='Eliminated'
            />
            </span>
            <span className='mt-2'>
             <Dropdown
               placeholder="Education"
               name='Informatic'
               name2='Non-Informatic'
            />
            </span>
            <Button label='Search' classNames={"mb-[5vw] mr-[5vw] mt-[-1vw]"}/>

          </div>
          <Tablementee/>
          <div className='flex gap-x-3 pl-[56vw]'>
            <Button label="Previous"/>
            <Button label="Next"
            classNames="w-24"/>
          </div>
        </div>

    </section>
  )
}

export default index