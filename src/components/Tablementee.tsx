import React,{FC} from 'react'


interface Menteeprops{
    id:number;
    nama:string;
    clas:string|number;
    status:string;
    education:string;
    gender:string;
    onClick:React.MouseEventHandler;
    

}

const Tablementee:FC<Menteeprops> = ({id, nama, clas, status, education, gender, onClick}) => {
  return (
    <div>
        <div className="overflow-x-auto shadow-md">
        <table className="table">
            <thead className='bg-search text-white'>
                <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Class</th>
                    <th>Status</th>
                    <th>Education</th>
                    <th>Gender</th>
                    <th>Action</th>
             </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{id}</th>
                    <td>{nama}</td>
                    <td>{clas}</td>
                    <td>{status}</td>
                    <td>{education}</td>
                    <td>{gender}</td>
                    <td>Blue</td>
                </tr>
            </tbody>
        </table>
</div>
    </div>
  )
}

export default Tablementee