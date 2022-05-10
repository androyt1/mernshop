import React from 'react'
import { Link } from 'react-router-dom'

const Filter = ({show,setShow,category,setCategory}) => {
  return (
    <div className={`fixed top-[60px] md:top-[80px] px-3 right-0 h-[calc(100vh-40px)] pt-8 bg-[#215496] w-[50%] md:w-[20%] z-10 transition-all duration-500 ease-linear flex flex-col justify-start items-center ${show ? 'translate-x-0':'translate-x-[500px]'}`}>
        
       

         <ul className='flex flex-col items-start w-full md:hidden'>
            <li className='mb-[1rem] text-md cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='mb-[1rem] text-md cursor-pointer'><Link to='/admin'>Admin</Link></li>          
            <li className='mb-[1rem] text-md cursor-pointer '><Link to='/products'>Shop</Link></li>
            <li className='mb-[1rem] text-md cursor-pointer'><Link to='/login'>Login</Link></li>
        </ul>

        <div className='flex flex-col justify-center items-start w-full'>
               
                <input type="text" name="name" placeholder='Search...'  className='w-full placeholder-slate-50 py-1  focus:outline-dashed my-1 px-2 text-md bg-transparent border-2 border-[#fcfcfb] text-[#fcfcfb]' />

                <button type="button" className='w-[50%] py-2 focus:outline-dashed mt-2 mb-6    bg-white border-2 border-slate-50 text-gray-800 font-bold text-md mx-auto text-xs'>Search</button>
            </div> 

            <h4 className="text-md md:text-xl font-normal text-slate-50 ">Filters</h4>
        <div className='flex flex-col justify-center items-start w-full mt-2'>              
                <select type="text" className='w-full py-1   text-md  focus:outline-dashed my-1 px-2 bg-[#215496] text-slate-50 border-2 border-[#fcfcfb] custom-select' name="category" onChange={(e)=>setCategory(e.target.value)}>
                    <option>Filter By Category</option>
                    <option value="Electronics" className='bg-transparent text-slate'>Electronics</option>
                    <option value="Clothes" className='bg-transparent'>Clothes</option> 
                    <option value="Foods">Foods</option>
                </select>
            </div>

            {/* <div className='flex flex-col justify-center items-start w-full mt-4'>              
                <select type="text" className='w-full py-1   text-md shadow-md shadow-gray-500 focus:outline-dashed my-1 px-2 bg-transparent border-2 border-[#fcfcfb] text-[#fcfcfb]' name="category" >
                    <option>Filter By Price</option>
                    <option value="Electronics" className='bg-transparent text-slate'>Electronics</option>
                    <option value="Clothes">Clothes</option> 
                    <option value="Foods">Foods</option>
                </select>
            </div> */}
    </div>
  )
}

export default Filter