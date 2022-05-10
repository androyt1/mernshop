import React from 'react'
import shoe from '../images/shi.png'

const Login = () => {
  return (
    <div className='min-h-[calc(100vh-70px)]'>
    <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center min-h-[calc(100vh-70px)]  bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='w-full md:w-[50%] h-[calc(60vh-60px)] md:h-full flex flex-col justify-end md:justify-center items-center md:items-start md:px-20 '>
          
              <img src={shoe} className='h-full w-full' alt="" />
        </div>
        <div className='w-full md:w-[50%] h-[40vh]  md:h-full flex justify-center items-start md:items-center text-slate-50'>
        
          <form action="" className='w-full md:w-[70%] px-5 py-5   md:py-10 md:px-10 md:shadow-xl md:shadow-blue-700'>
              <div className='w-full px-3  pt-2 md:pt-0'>
                  <label htmlFor="" className='font-bold text-slate-50 mb-4'>Email</label>
                  <input type="email" placeholder='Enter Email Address Here'  className='w-full mt-2 bg-transparent border-2 border-slate-200 py-2 px-1 placeholder:text-slate-50 pl-2 focus:outline-none focus:border-pink-400 focus:border-4'/>
              </div>
              <div className='w-full px-3 py-3'>
                  <label htmlFor="" className='font-bold text-slate-50 '>Password</label>
                  <input type="password" placeholder='Enter Password here'  className='w-full mt-2 bg-transparent border-2 border-slate-200 py-2 px-1 placeholder:text-slate-50 pl-2 focus:outline-none focus:border-pink-400 focus:border-4'/>
              </div>
              <div className='w-full flex justify-center items-center'>
                    <button type="submit" className='border-none bg-slate-200 text-blue-500 font-bold py-3 w-[70%] md:w-[40%] mt-5 shadow-md shadow-gray-600'>Login</button>
              </div>
          </form>
        </div>
    </div>
  </div>
  )
}

export default Login