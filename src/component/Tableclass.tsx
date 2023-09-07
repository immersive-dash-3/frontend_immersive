import React,{FC} from 'react'

interface classprops{
    id:number;
    nama:string;
    index:number;
    onClick:React.MouseEventHandler;
    onDelete:React.MouseEventHandler;

}

const Tableclass:FC<classprops> = ({id,nama,index,onDelete,onClick}) => {
  return (
            <tr key={index}>
                <td>{id}</td>
                <td>{nama}</td>
                <td className='flex gap-x-3 item-center'>
                <span onClick={onClick} className='cursor-pointer'>
                <i className="fa-solid fa-pen-to-square"></i>
                </span>
                <span onClick={onDelete} className='cursor-pointer'>
                <i className="ts fa-regular fa-trash-can"></i>
                </span>

                </td>
            </tr>

  )
}

export default Tableclass