import React from 'react'
import { Link } from 'react-router-dom'


const Filter = ({show,setShow,category,setCategory}) => {

    

  return (
    <div className={`fixed  top-[60px] md:top-[80px] px-3 right-0 h-[calc(100vh-40px)] pt-8 bg-[#215496] w-[50%] md:w-[20%]  transition-all duration-500 ease-linear flex lg:hidden flex-col justify-start items-center z-20 ${show ? 'translate-x-0':'translate-x-[500px]'}`}>
        
       

         <ul className='flex flex-col items-start w-full md:hidden'>
            <li className='mb-[1rem] text-md cursor-pointer' onClick={()=>setShow(!show)}><Link to='/'>Home</Link></li>                  
            <li className='mb-[1rem] text-md cursor-pointer 'onClick={()=>setShow(!show)} ><Link to='/products'>Shop</Link></li>
            <li className='mb-[1rem] text-md cursor-pointer' onClick={()=>setShow(!show)}><Link to='/admin'>Admin</Link></li>   
            <li className='mb-[1rem] text-md cursor-pointer' onClick={()=>setShow(!show)}><Link to='/login'>Login</Link></li>
        </ul>

       
 
          

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