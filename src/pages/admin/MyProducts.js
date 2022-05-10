import React,{useEffect,useState,useCallback} from 'react'
import { Link } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import {getProducts,deleteProduct} from '../../redux/actions/products'

const MyProducts = () => { 
 
    const dispatch = useDispatch();
  
  
    const state= useSelector(state => state.allProducts)
    const{loading,error} = state;
    const[products,setProducts]=useState([]);

    const initFetch = useCallback(() => {
        dispatch(getProducts())
        .then(res => {         
            setProducts(res.products)
        })
        .catch(err => {
            console.log(err)
        })
    },[dispatch])

    useEffect(() => {
        initFetch() 
    } , [initFetch])

    const handleDelete =(id)=> {       
        dispatch(deleteProduct(id))
        .then(res => {              
            let prod=products.filter(product => product._id !== id);
            setProducts(prod);
            toast.success('Product Deleted Successfully');
        })
        .catch(err => {
            console.log(err.response.message);         
            toast.error('Error Deleting Product');
        }) 
    }


  return (
      <>
       <h1 className='font-mono'> {loading ? '...Loading Products':'Products'}</h1> 
       {error ? <h1>{error}</h1> : null} 
    <div className='w-full grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6 font-nunito'>
       {products.map(product=>(        
          <div  className='w-full border-2 border-slate-200 flex flex-col justify-center items-center py-3 px-2' key={product._id}>
              <Link to={`/admin/product-details/${product._id}`} ><img src={product.product_image} alt="" className='h-20 ' /> </Link>
               <p className='text-center mt-1 font-nunito'>{product.name}</p>
               <div className='w-full flex-col md:flex-row flex justify-between items-center mt-2'>
                    <Link to={`/admin/update-product/${product._id}`}  className='cursor-pointer w-full md:w-[40%] py-1 shadow-md shadow-slate-400 border-2 border-[#215496] bg-slate-50 text-xs text-slate-700 flex justify-center items-center'>Update</Link>
                    <button  className='cursor-pointer w-full mt-2 md:w-[40%] py-1 shadow-md shadow-slate-400 bg-[#215496]  text-xs text-slate-50' onClick={(e)=>handleDelete(product._id)}>Delete</button>
               </div>
           </div>
          
       ))}
    </div>
    <ToastContainer />
    </> 
  )
}

export default MyProducts