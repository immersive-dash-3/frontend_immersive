import React, {FC} from 'react'

interface ButtonProps {
  label: string,
  onClick?: React.MouseEventHandler,
  classNames?: string | number
}

const Button: FC<ButtonProps> = ({label, onClick, classNames}) => {
  return (
    <div className='w-full mt-5'>
      <button onClick={onClick} className={`bg-primary-color text-white shadow-sm focus:outline-none hover:bg-primary-color-hover hover:outline-none hover:border-primary-color ${classNames}`}>
        {label}
    </button>
    </div>
  )
}

export default Button