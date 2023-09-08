import React,{FC} from 'react'

interface dropprops{
    value: string;
    onChange:React.ChangeEventHandler;
    name:string;
    name2:string;
    name3:string;
}

const Dropdown:FC<dropprops> = ({value,onChange,placeholder,name,name2,name3}) => {
  return (
    <div>
        <select
            name={placeholder}
            className=" border-solid border-2 border-border-color rounded-lg focus:outline-none w-[10vw] py-3 px-2 bg-transparent"
                >
            <option value={value} onChange={onChange}>{name}</option>
            <option value={value} onChange={onChange}>{name2}</option>
            <option value={value} onChange={onChange}>{name3}</option>
        </select>
    </div>
  )
}

export default Dropdown