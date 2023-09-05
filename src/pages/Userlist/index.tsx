import React from 'react'
import Tableuser from '../../components/Tableuser'
import Inputsearch from '../../components/Inputsearch'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

const index = () => {
  return (
    <section className='flex flex-row'>
        <div className="w-20vw h-[100vh]">
          <Sidebar/>
        </div>
        <div className="w-[80vw] ml-[20vw] px-10 py-5">
          <Navbar title='Userlist'/>
          <div className='my-10 pl-[18rem]'>
            <Inputsearch/>
          </div>
          <Tableuser/>
        </div>

    </section>

  )
}

export default index