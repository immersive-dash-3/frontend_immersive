import React,{FC} from 'react'

interface Inputsearch{
  value:string
  onChange:React.ChangeEventHandler
  onClick:React.MouseEventHandler
}

const Inputsearch:FC<Inputsearch> = ({value,onChange,onClick}) => {
  return (
    <div className='my-5 pl-40'>
        <input 
        type="text" 
        placeholder="Search..." 
        value={value}
        onChange={onChange}
        className="input input-bordered w-50 h-18 max-w-xs focus:outline-none"/>
        <button
        className="w-24 h-18 mx-2 bg-search hover:bg-blue-900 hover:border-none focus:outline-none rounded-md text-white font-regular"
        onClick={onClick}>Search
        </button>
    </div>

  )
}

export default Inputsearch