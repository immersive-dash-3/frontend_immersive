import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

import Tableclass from '../../../component/Tableclass'
import Sidebar from '../../../component/Sidebar'
import Navbar from '../../../component/Navbar'
import Inputsearch from '../../../component/Inputsearch'
import Button from '../../../component/Button'
import Modalclass from '../../../component/Modalclass'
import Modaledituser from '../../../component/Modaledituser'
import Cookie from 'js-cookie'



const index = () => {
  const[data,setData]=useState<[]>();
  const[popup,setPopup] = useState<Boolean>(false);

  const addNewClass=() => {
    setPopup(!popup);
  }

  const editClass=() => {
    setPopup(!popup);
  }
  const token = Cookie.get('token')
  const role = Cookie.get('role')
  console.log(role)

  const getclass =() => {
    axios.get('https://belanjalagiyuk.shop/classes?page=1&itemsPerPage=9',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    .then((response) => {
      setData(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
    
  }

  useEffect(() => {
    getclass()
  }, [])

  return (
    <section className='flex flex-row'>
        <div className="w-20vw h-[100vh]">
          <Sidebar/>
        </div>
        <div className="w-[80vw] ml-[20vw] px-10 py-5">
          <Navbar title='Classlist'/>
          <div className=' flex pl-[24vw]'>
            <span>
            <Inputsearch/>
            </span>
            <span>
            <Button 
            label='Add New'
            onClick={()=>addNewClass()}/>
            </span>

          </div>
          <div className="overflow-x-auto shadow-md">
            <table className='table'>
              <thead className='bg-search text-white'>
                <tr>
                  <th>No</th>
                  <th>Classname</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {data && data.map((item:any, index) =>{
            return(
              <Tableclass 
              key={index}
              index={index}
              id={item.id}
              nama={item.name}
              onClick={()=>editClass()}/>
            )
          }
          )}
              </tbody>
            </table>
          </div>
          <div className='flex gap-x-3 pl-[56vw]'>
            <Button label="Previous"/>
            <Button label="Next"
            classNames="w-24"/>
          </div>
          <div>
          <Modalclass isOpen={popup} onClose={() => setPopup(false)}>
            <div className="w-[25vw] h-[80vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold">
                Add New Class
              </div>

              <div className="flex flex-col mt-5">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600"
                >
                  Classname
                </label>
                <input 
                type="text" 
                placeholder="Classname" 
                className="input input-bordered w-50 h-18 max-w-xs focus:outline-none"/>
              </div>
              <div>
                <Button 
                label='Save'
                />
              </div>
            </div>
          </Modalclass>
        </div>
        <div>
        <Modaledituser isOpen={popup} onClose={() => setPopup(false)}>
            <div className="w-[25vw] h-[80vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold">
                Adds New Class
              </div>

              <div className="flex flex-col mt-5">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600"
                >
                  Classname
                </label>
                <input 
                type="text" 
                placeholder="Classname" 
                className="input input-bordered w-50 h-18 max-w-xs focus:outline-none"/>
              </div>
              <div>
                <Button 
                label='Save'
                />
              </div>
            </div>
          </Modaledituser>
        </div>
        </div>

    </section>
  )
}

export default index