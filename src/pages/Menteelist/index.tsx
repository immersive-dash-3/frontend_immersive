import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, } from 'react-redux'
import axios from 'axios'
import Tablementee from '../../components/Tablementee'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Inputsearch from '../../components/Inputsearch'


const index = () => {
  return (
    <section className='flex flex-row'>
        <div className="w-20vw h-[100vh]">
          <Sidebar/>
        </div>
        <div className="w-[80vw] ml-[20vw] px-10 py-5">
          <Navbar title='Menteelist'/>
          <div className='my-10 pl-[18rem]'>
            <Inputsearch/>
          </div>
          <Tablementee/>
        </div>

    </section>
  )
}

export default index