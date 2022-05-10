import React from 'react'
import shirt from '../images/shoe.png'

const Home = () => {
  return (
    <div className='min-h-[calc(100vh-70px)]'>
      <div className='w-full flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-70px)]  bg-gradient-to-r from-cyan-500 to-blue-500'>
          <div className='w-full md:w-[50%] h-[calc(40vh-60px)] md:h-full flex flex-col justify-center items-center md:items-start md:px-20 '>
              <h1 className='text-2xl md:text-4xl font-nunito font-bold leading-9 text-[#C9D9F3]'>Welcome to</h1>
              <h3 className='text-5xl mt-4 md:text-8xl font-nunito font-bold leading-9 text-white'>AndroyShop</h3>
          </div>
          <div className='w-full md:w-[50%] h-[60vh]  md:h-full flex justify-center items-center '>
            <img src={shirt} className='h-full w-full' alt="" />
          </div>
      </div>
    </div>
  )
}

export default Home