import React from 'react'
import {AiFillDashboard} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'
import {HiViewGridAdd} from 'react-icons/hi'
import { Link,Outlet } from 'react-router-dom'
import {GrOrderedList} from 'react-icons/gr'


const Admin = () => {     


  return (
    <>
    <div className='flex w-full min-h-[calc(100vh-60px)] '>

        <div className='hidden md:w-[20%] md:flex bg-[#215496]  min-h-[calc(100vh-60px)]  flex-col justify-start py-28 items-center relative'>
            <div className='flex justify-start items-center w-full pl-3 fixed top-[160px] left-0'>
                <AiFillDashboard className='text-4xl text-white'/> 
                <span className='font-normal ml-4 hidden md:block text-slate-50'>Dashboard</span>
            </div>
            <div className='flex justify-start items-center w-full pl-3 mt-10 fixed top-[220px] left-[5px]'>
                <FiSettings className='text-2xl text-white'/> 
                <span className='font-normal ml-4 hidden md:block text-slate-50'>Manage Products</span>
            </div>

            <div className='flex justify-start items-center w-full pl-3 mt-10 fixed top-[300px] left-[5px]'>
            <Link to='/admin/new-product'> <HiViewGridAdd className='text-2xl text-white'/> </Link>
                <span className='font-normal ml-4 hidden md:block text-slate-50'><Link to='/admin/new-product'>Add Products</Link></span>
            </div> 

            <div className='flex justify-start items-center w-full pl-3 mt-10 fixed top-[260px] left-[5px]'>
            <Link to='/admin/my-products'> <GrOrderedList className='text-2xl text-white'/> </Link>
                <span className='font-normal ml-4 hidden md:block text-slate-50'><Link to='/admin/my-products'>Products</Link></span>
            </div> 
        </div>  
         
        <div className='w-full md:w-[80%] min-h-[calc(100vh-60px)] px-3 py-4'>    
            <h4 className="text-xl md:text-2xl mt-2">Admin Page</h4>

           <div className='w-full flex md:hidden px-3 justify-between items-center my-5 sticky top-[70px] bg-transparent left-0'>
                <Link to='/admin/my-products' className='w-[40%] bg-[#215496] text-blue-50 py-2 flex justify-center items-center'>Products</Link>
                <Link to='/admin/new-product' className='w-[40%] bg-[#215496] text-blue-50 py-2 flex justify-center items-center'>Add Products</Link>
           </div>
            <Outlet />
        </div>
    </div>
    </>
  )
}

export default Admin