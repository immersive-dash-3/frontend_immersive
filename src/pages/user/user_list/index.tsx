import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

import Tableuser from '../../../component/Tableuser'
import Inputsearch from '../../../component/Inputsearch'
import Sidebar from '../../../component/Sidebar'
import Navbar from '../../../component/Navbar'
import Button from '../../../component/Button'
import Modalclass from '../../../component/Modalclass'
import Modaledituser from '../../../component/Modaledituser'
import Cookie from 'js-cookie'
import Swal from 'sweetalert2'

const index = () => {
  const[data,setData]=useState<[]>();
  const[popup,setPopup] = useState<Boolean>(false);
  const[edit,setEdit] = useState<Boolean>(false);
  //createuser
  const[fullname,setFullname] = useState<string>('');
  const[email,setEmail] = useState<string>('');
  const[password,setPassword] = useState<string>('');
  const[address,setAddress] = useState<string>('');
  const[team,setTeam] = useState<string>('');
  const[roles,setRole] =useState<string>('');
  const[status,setStatus]=useState<string>('');

  //edituser
  const[editData,setEditData] = useState<any>();
  console.log(editData)
  const[editid,setEditid] = useState<string>('');
  const[editfullname,setEditfullname] = useState<string>('');
  const[editemail,setEditemail] = useState<string>('');
  const[editpassword,setEditpassword] = useState<string>('');
  const[editaddress,setEditaddress] = useState<string>('');
  const[editteam,setEditteam] = useState<string>('');
  const[editroles,setEditroles] =useState<string>('');
  const[editstatus,setEditstatus]=useState<string>('');



  const addNewUser = () =>{
    setPopup(!popup);
  }
  const editUser=(id:string) => {
    axios.get(`https://belanjalagiyuk.shop/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`
      }
    }
    )
    .then((res) => {
      setEditData(res.data.data)

    })
    setEdit(!edit);
  }
  const token = Cookie.get('token')
  const role = Cookie.get('role')

  const getUser = () => {
    axios.get('https://belanjalagiyuk.shop/users?page=1&itemsPerPage=9',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    .then((response) => {
      setData(response.data.data)
      console.log(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
    
  }
  const HandleSubmitUser = () =>{
    axios.post('https://belanjalagiyuk.shop/users',{
      name:fullname,
      email:email,
      password:password,
      address:address,
      team:team,
      role:roles,
      status:status
    },{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    .then((response) => {
      Swal.fire({
        icon:'success',
        title: response.data.message,
        showConfirmButton: false,
      })
      .then((response) => {
        getUser()
        setPopup(!popup)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <section className='flex flex-row'>
        <div className="w-20vw h-[100vh]">
          <Sidebar/>
        </div>
        <div className="w-[80vw] ml-[20vw] px-10 py-5">
          <Navbar title='Userlist'/>
          <div className=' flex pl-[24vw]'>
            <span>
            <Inputsearch/>
            </span>
            <span>
            <Button 
            label='Add New'
            classNames={role === 'Admin' ? "enabled cursor-allowed":"disabled cursor-not-allowed opacity-50"}
            onClick={()=>addNewUser()}/>
            </span>
          </div>
          <div className="overflow-x-auto shadow-md">
            <table className='table'>
              <thead className='bg-search text-white'>
                <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Team</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {data && data.map((item:any, index) =>{
            return(
              <Tableuser 
              key={index}
              id={item.id}
              nama={item.name}
              email={item.email}
              team={item.team}
              role={item.role}
              status={item.status}
              onClick={()=>editUser(item.id)}/>
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
          <Modalclass isOpen ={popup} onClose={() => setPopup(false)}>
            <div className="w-[50vw] h-[90vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold">
                Add New User
              </div>
              <div className="flex flex-row mt-1 gap-x-10">
                <div className='flex flex-col'>
                  <label
                    htmlFor=""
                    className="after:content-['*'] after:text-red-600 text-left"
                    >
                  Full Name
                  </label>
                  <input 
                    type="Name" 
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="mt-1 input input-bordered w-[23vw] max-w-xs focus:outline-none"/>
                </div>
                <div className='flex flex-col'>
                  <label
                    htmlFor=""
                    className="after:content-['*'] after:text-red-600 text-left"
                  >
                  Email
                  </label>
                <input 
                    type="Email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 input input-bordered w-[23vw] max-w-xs focus:outline-none"/>
                </div>
              </div>
              <div className="flex flex-row mt-1 gap-x-10">
                <div className='flex flex-col'>
                  <label
                    htmlFor=""
                    className="after:content-['*'] after:text-red-600 text-left"
                    >
                  Password
                  </label>
                  <input 
                    type="Password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 input input-bordered w-[23vw] max-w-xs focus:outline-none"/>
                </div>
                <div className='flex flex-col'>
                  <label
                    htmlFor=""
                    className="after:content-['*'] after:text-red-600 text-left"
                  >
                  Address
                  </label>
                <input 
                    type="Address" 
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 input input-bordered w-[23vw] max-w-xs focus:outline-none"/>
                </div>
              </div>

              <div className="flex flex-col mt-1">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Team
                </label>
                <select
                  name="Team"
                  className="mt-1 border-solid border-2 border-border-color rounded-lg focus:outline-none w-full py-3 px-2 bg-transparent"
                >
                  <option value="active" onChange={(e:any)=>setTeam(e.target.value)}>Academic</option>
                  <option value="active" onChange={(e:any)=>setTeam(e.target.value)}>Admission</option>
                  <option value="active" onChange={(e:any)=>setTeam(e.target.value)}>People</option>
                  <option value="active" onChange={(e:any)=>setTeam(e.target.value)}>Placement</option>
                </select>
              </div>
              <div className="flex flex-col mt-1">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Role
                </label>
                <select
                  name="Role"
                  className="mt-1 border-solid border-2 border-border-color rounded-lg focus:outline-none w-full py-3 px-2 bg-transparent"
                >
                  <option value="active" onChange={(e:any)=>setRole(e.target.value)}>Admin</option>
                  <option value="active" onChange={(e:any)=>setRole(e.target.value)}>Default</option>
                </select>
              </div>
              <div className="flex flex-col mt-1">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Status
                </label>
                <select
                  name="Status"
                  className="mt-1 border-solid border-2 border-border-color rounded-lg focus:outline-none w-full py-3 px-2 bg-transparent"
                >
                  <option value="active" onChange={(e:any)=>setStatus(e.target.value)}>Active</option>
                  <option value="active" onChange={(e:any)=>setStatus(e.target.value)}>Non-Active</option>
                </select>
              </div>
              <div>
                <Button 
                label='Save'
                onClick={() => HandleSubmitUser()}
                />
              </div>
            </div>
          </Modalclass>
          </div>
          <div>
          <Modaledituser isOpen={edit} onClose={() => setEdit(false)}>
            <div className="w-[25vw] h-[90vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold">
                Edit User
              </div>
              <div className="flex flex-col mt-1">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Full Name
                </label>
                <input 
                type="text"
                value={editData?.name}      
                placeholder="Full Name" 
                className="mt-1 input input-bordered w-full max-w-xs focus:outline-none"/>
              </div>
              <div className="flex flex-col mt-1">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Email
                </label>
                <input 
                type="text" 
                value={editData?.email} 
                placeholder="Full Name" 
                className="mt-1 input input-bordered w-50 max-w-xs focus:outline-none"/>
              </div>
              <div className="flex flex-col mt-1">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Team
                </label>
                <select
                  name="Team"
                  className="mt-1 border-solid border-2 border-border-color rounded-lg focus:outline-none w-full py-3 px-2 bg-transparent"
                >
                  <option value="active">Academic</option>
                  <option value="active">Admission</option>
                  <option value="active">People</option>
                  <option value="active">Placement</option>
                </select>
              </div>
              <div className="flex flex-col mt-1">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Role
                </label>
                <select
                  name="Role"
                  className="mt-1 border-solid border-2 border-border-color rounded-lg focus:outline-none w-full py-3 px-2 bg-transparent"
                >
                  <option value="active">Admin</option>
                  <option value="active">Default</option>
                </select>
              </div>
              <div className="flex flex-col mt-1">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Status
                </label>
                <select
                  name="Status"
                  className="mt-1 border-solid border-2 border-border-color rounded-lg focus:outline-none w-full py-3 px-2 bg-transparent"
                >
                  <option value="active">Active</option>
                  <option value="active">Non-Active</option>
                </select>
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