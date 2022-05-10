import React,{useEffect,useCallback} from 'react'
import ProductCard from '../components/ProductCard'
import {useSelector,useDispatch} from 'react-redux'
import { getProducts} from '../redux/actions/products';


const Products = () => { 
  
   

 
    const dispatch = useDispatch();
     const state = useSelector(state =>state.allProducts);
    const{products,loading,error} = state;   

     const initFetch = useCallback(() => {
        dispatch(getProducts());      
      }, [dispatch])
    
      useEffect(() => { 
        initFetch()
      }, [initFetch])


   

  return (
      <>
    <div className=' w-full flex flex-col justify-center items-center'>
        <h1 className="text-center font-bold text-xl md:text-2xl text-black mt-6 ">{loading ? '...Loading Products':'Products'}</h1>      

         <h1 className="text-center font-bold text-xl md:text-xl text-black mt-6 ">{error && 'Something went wrong'}</h1>        
    </div>  

       <ProductCard products={products} />   
        
    </>
  )
}

export default Products