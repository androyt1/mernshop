import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import { getProduct } from '../../redux/actions/products'
import { useSelector, useDispatch } from 'react-redux'

const AdminDetails = () => {

    const {id} = useParams() 
 
    const dispatch = useDispatch();
    const state = useSelector(state => state.allProducts);
    const{loading,error} = state
    const[product,setProduct]=useState({})

    useEffect(()=>{
        dispatch(getProduct(id))
        .then(res => {            
            setProduct(res.product)           
        })
        .catch(err => {
           console.log(err)
        })
    },[id])

   


  return (
    <div className='w-full min-h-[calc(100vh-70px)] flex flex-col justify-center items-center'>
        <h1 className='text-xl md:text-2xl mt-10 font-bold text-center'>{loading ? '...loading Product':'Product Details'}</h1>

        <div className='w-full md:w-[100%] lg:w-[75%] flex flex-col md:flex-row justify-center items-center h-full mt-6'>
            <div className='w-full h-full flex flex-col justify-center items-center md:w-[50%]'>
                <img src={product.product_image} className='w-full h-full' alt="" />
            </div>
            <div className='w-full h-full flex flex-col justify-center items-start md:w-[50%] px-5 mt-10 md:mt-0'>
                <p><span className='font-bold text-xl'>Name: </span> {product.name}</p>
                <p><span className='font-bold text-xl'>Price: </span>$ {product.price}.00</p>
                <p><span className='font-bold text-xl'>Category: </span> {product.category}</p>
                <p><span className='font-bold text-xl'>Stock: </span> {product.quantity > 1 ?<span className='text-green-700 font-bold'>Available</span>: <span className='text-red-900 font-bold'>Unavailable</span>}</p>
                <p><span className='block font-bold mt-3'>Description</span></p>
                <p>{product.description}</p>

                <div className='flex justify-center items-center w-full'>
                <Link to='/admin/my-products' className='flex justify-center items-center w-full md:w-[80%] py-2 md:py-3 bg-[#215496] text-green-50 mt-10 shadow-nd  shadow-md shadow-slate-700'>Back to Products</Link>
               
                </div>
                
            </div>
        </div> 
    </div>
  )
}

export default AdminDetails