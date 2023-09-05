import React,{FC} from 'react'


const Inputsearch = () => {
  return (
    <div className='my-5 pl-40'>
        <input 
        type="text" 
        placeholder="Search..." 
        className="input input-bordered w-50 h-18 max-w-xs focus:outline-none"/>
        <button
        className="w-24 h-18 mx-2 bg-search hover:bg-blue-900 hover:border-none focus:outline-none rounded-md text-white font-regular">Search
        </button>
        <button
        className="w-30 h-18 bg-orange-500 hover:bg-orange-400 hover:border-none focus:outline-none rounded-md text-white font-regular">Add New
        </button>
    </div>

  )
}

export default Inputsearch