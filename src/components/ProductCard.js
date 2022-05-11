import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { addToCart } from '../redux/actions/cart'; 
import { useDispatch ,useSelector} from 'react-redux';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Search from './Search';

const ProductCard = ({products,search}) => { 

    const dispatch = useDispatch();
 
  const cart=useSelector(state => state.cart); 

  
  const addToCartHandler = (product) => { 
    dispatch(addToCart(product))  
  }

  return ( 
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-20 mt-10  px-5 py-3 gap-2 '>
       {products && products.filter(product=>product.name.toLowerCase().includes(search.toLowerCase())).map(product=>{
         product.count=1
         return(
          <div className='flex flex-col justify-center items-center shadow-md shadow-slate-400  bg-white  py-5 relative' key={product._id}>
          <Link to={`/product-details/${product._id}`}> <img src={product.product_image} alt='product' className='w-full  max-h-40 hover:scale-150 transition-all duration-500 ease-linear'/></Link>
           <div className='w-full h-full flex flex-col justify-start items-center px-3 mt-3'>
           <p className='text-center text-md text-slate-900 font-normal'><span className='font-bold'>Name: </span>{product.name}</p>
           <p className='text-center text-md text-slate-900 font-normal'><span className='font-bold'>Price: </span>{product.price}$</p>       
           <button className='w-full lg:w-[75%] mt-3 mx-auto bg-[#215496] text-green-50 py-2 ' onClick={()=>addToCartHandler(product)}>Add to Cart</button>
           </div>   
           <div className='hidden absolute top-0 right-0 w-[2rem] h-[2rem]  md:flex justify-center items-center text-3xl'>
             <AiOutlineShoppingCart className='cursor-pointer  text-[#215496]'  onClick={()=>addToCartHandler(product)}/>
           </div>      
      </div>
         )
       })}
       <ToastContainer />
      </div>
  )
}

export default ProductCard