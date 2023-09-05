import React,{FC} from 'react'

import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs"
interface userprops{
    id:number;
    nama:string;
    email:string;
    team:string;
    role:string;
    status:string;
}
const Tableuser:FC<userprops> = ({id,nama,email,team,role,status}) => {
  return (
    <div>
            <div>
        <div className="overflow-x-auto shadow-md w-full">
        <table className="table">
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
                <tr>
                    <th>1{id}</th>
                    <td>Rachman Kamil{nama}</td>
                    <td>kamil@alterra.id{email}</td>
                    <td>Academic{team}</td>
                    <td>Default{role}</td>
                    <td>Active{status}</td>
                    <td className='action flex gap-x-2 items-center'>
                        <span >
                        <BsFillTrashFill className="btn-del" />
                        </span>
                        <span>
                        <BsFillPencilFill/>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
</div>
    </div>
    </div>
  )
}

export default Tableuser