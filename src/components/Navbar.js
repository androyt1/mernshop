import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegWindowClose} from 'react-icons/fa'
import Filter from './Filter'
import Cart from '../pages/Cart'
import { useSelector } from 'react-redux'
 
const Navbar = ({category,setCategory}) => {
 
 
  const cart=useSelector(state => state.cart);
  let itens=cart.length;
 
  const[show,setShow] = useState(false);
  const[operCart,setOperCart] = useState(false);

 

  // const handle open close cart
  const handleOpen = () => {
    setOperCart(!operCart);
  }

  //handle show 
  const handleShow = () => {
    setShow(!show);
  }

  return (
    <nav className='w-full flex justify-between items-center px-3 font-nunito h-[60px] shadow-md shadow-gray-600 sticky top-0 left-0 bg-[#215496] text-slate-50 z-30'>
        <h4 className='text-xl font-bold font-sans cursor-pointer '><Link to="/">A Shop</Link></h4>
       
        <ul className='hidden md:flex'>
            <li className='mr-[5rem] cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='mr-[5rem] cursor-pointer'><Link to='/admin'>Admin</Link></li>           
            <li className='mr-[5rem] cursor-pointer '><Link to='/products'>Shop</Link></li>
            <li className='mr-[5rem] cursor-pointer '><Link to='/login'>Login</Link></li>
        </ul> 
         
       <div className='flex relative'> 
         <div className='mr-2 relative cursor-pointer  w-16' onClick={handleOpen }>
           <AiOutlineShoppingCart  className={`text-3xl  transition-all duration-700 ease-linear text-slate-50  `}/>
            <span className='absolute top-[-5px] right-6 text-md text-white font-nunito font-semibold'>{ itens}</span>
         </div>
       {
          show ? <FaRegWindowClose className={`text-3xl cursor-pointer transition-all duration-700 ease-linear text-slate-50 `} onClick={handleShow}/> : <AiOutlineMenu className={`text-3xl cursor-pointer transition-all duration-700 ease-linear text-slate-50 `} onClick={handleShow}/>
        }
       </div>


       <Filter show={show} setShow={setShow}  />
        <Cart operCart={operCart} />
    </nav>
  )  
}

export default Navbar