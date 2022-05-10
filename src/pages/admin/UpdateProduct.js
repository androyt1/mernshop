import React,{useEffect,useState,useRef,useCallback} from 'react'
import { useParams } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { updateProduct } from '../../redux/actions/products'; 
import { getProduct } from '../../redux/actions/products';
import { useDispatch,useSelector } from 'react-redux';

const UpdateProduct = () => { 

    const id = useParams().id; 
   

    const dispatch = useDispatch();  
   
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[product_image,setProduct_Image]=useState('')
    const[description,setDescription]=useState('')
    const[quantity,setQuantity]=useState(0)
   

    const state= useSelector(state => state.allProducts)  
   const{product,loading,error} = state
      
    
  
    // const initFetch = useCallback(() => {
    //     dispatch(getProduct(id));      
    //   }, [dispatch,id])
    
    useEffect(()=>{
        dispatch(getProduct(id))       
      .then(res => {       
        setName(res.product.name)
        setPrice(res.product.price)
        setCategory(res.product.category)        
        setDescription(res.product.description)
        setQuantity(res.product.quantity)
      })
    },[dispatch,id])



    const admin_updateProduct = (e) => {
        e.preventDefault();       
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('category',category)
        formData.append('description',description)
        formData.append('quantity',quantity)
        formData.append('product_image',product_image)
      
        dispatch(updateProduct(id,formData))
        .then(res => {
            // console.log(res)
            toast.success('Product updated successfully')
            // setName(res.product.name)
            // setPrice(res.product.price)
            // setCategory(res.product.category)        
            // setDescription(res.product.description)
            // setQuantity(res.product.quantity)
        })
        .catch(err => {
            console.log(err)
            toast.error('Error updating product'+err)
        })
    } 
  
  return (
    <div className='w-full bg-slate-800 text-slate-50 min-h[calc(100vh-60px)] flex flex-col justify-center items-center'>
        <h1 className='text-xl md:text-2xl pt-5'>{loading ? '...Loading Product':'Update Product'}</h1> 
        {error ? <h1>{error}</h1> : null}
       {/* <h5 className='text-6'>Name {product && product.product.name}</h5> */}
         <form onSubmit={admin_updateProduct} className='w-full min-h[calc(100vh-60px)] md:w-[75%] lg:w-[50%] px-3'>
            <div className='w-full mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={name} className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full'  onChange={(e)=>setName(e.target.value)} />
            </div> 
            <div className='w-full mb-2'> 
                <label htmlFor="">Price</label>
                <input type="text" name='price' value={price} className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full'  onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            
            {/* <div className='w-full mb-2 flex justify-center items-center'>
                <img src={product && product.product.product_image} className='max-w-[20vw]' alt="" />
            </div> */}

            <div className='w-full mb-2'>
                <label htmlFor="">Category</label>
                <select  name='category' value={category} className='my-1 bg-slate-800 border-2 border-slate-50 text-slate-50 py-1 px-2 w-full'  onChange={(e)=>setCategory(e.target.value)}>
                    <option value=''>Select Product Category</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Clothes'>Clothes</option>
                    <option value='Food'>Foods</option>
                </select>
            </div> 







            <div className='w-full mb-2'>
                <label htmlFor="">Quantity</label>
                <input type="number" name='quantity' value={quantity} className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full'  onChange={(e)=>setQuantity(e.target.value)}/>
            </div>
            <div className='w-full mb-2'>
                <label htmlFor="">image</label>
                <input type="file" name='product_image'  className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full' onChange={(e)=>setProduct_Image(e.target.files[0])} />
            </div>
            <div className='w-full mb-2'>
                <label htmlFor="">Description</label>
                <textarea name="description" value={description} id="" cols="30" rows="3"  className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full' onChange={(e)=>setDescription(e.target.value)}>
                </textarea>
            </div>
            <div className='w-full mb-10 flex justify-center items-center'>
                <button type='submit' className='my-1 bg-transparent border-2 border-slate-50 py-2 px-2 w-full md:w-[50%] rounded-xl '>Update Product</button>
            </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default UpdateProduct