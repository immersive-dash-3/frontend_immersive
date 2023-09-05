import React, {FC} from 'react'

interface MenteeLogProps {
    id: any,
    log: string | number,
    status: string | number,
    date: string | number
}

const MenteeLog: FC<MenteeLogProps> = ({id, log, status, date}) => {
  return (
    <div id={id} className='flex flex-col shadow-md w-full p-5 leading-8 '>
        <div className='text-end text-primary-color text-[0.9em]'>{date}</div>
        <div className='text-justify'>"{log}"</div>
        <div className='text-[0.9em] mt-3'>
        {status}
        </div>
    </div>
  )
}

export default MenteeLog