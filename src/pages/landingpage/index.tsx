import React from 'react'
import { NavigateFunction,useNavigate } from 'react-router-dom'
import Button from '../../component/Button'

const index = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="flex w-[100vw] h-[100vh] bg-gradient-to-t from-[#f4772446] from-0% via-transparent to-transparent">
      <div className="flex flex-1 flex-col justify-center items-center mr-32">
        <div>
          <img
            src="./WFH.png"
            alt=""
            className="w-[45vw] h-auto ml-[3vw] mb-[8vw] mt-[2vw]"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center ml-5 mr-20">
        <div className="mb-[2vw] text-left text-search">
          <p>Akselerator Talenta Teknologi Indonesia</p>
        </div>
        <div>
          <img
          src='./Karir.png'
          alt=""
          className='h-auto w-[45vw] mb-[2vw]'
          />
        </div>
        <div className='text-left text-search'>
          <p>
          Akselerator Talenta Teknologi dengan tujuan <br/>
          meningkatkan karir serta taraf hidup anak muda<br/>
          Indonesia dengan sukses berkarir di Industri Teknologi<br/>
          melalui pendidikan IT berkualitas
          </p>
        </div>
        <Button
        label='Login'
        classNames={`w-[20vw] mt-7`}
        onClick={() => navigate("/login")}/>
      </div>
    </div>
  )
}

export default index