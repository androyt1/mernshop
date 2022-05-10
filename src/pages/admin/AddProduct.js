import React,{useState} from 'react'
import product_service from '../../helpers/product_service'
import {createProduct} from '../../redux/actions/products'
import {useDispatch} from 'react-redux'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => { 

    const dispatch = useDispatch();
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[product_image,setProduct_Image]=useState('')
    const[description,setDescription]=useState('')
    const[quantity,setQuantity]=useState(0)

    const newProduct = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('category',category)       
        formData.append('description',description)
        formData.append('quantity',quantity)
        formData.append('product_image',product_image)

        dispatch(createProduct(formData))
        .then(res => {           
            setName('') 
            setPrice('')
            setCategory('')
            setDescription('')
            setQuantity('')
            setProduct_Image('')
            toast.success('Product added successfully')
        })
        .catch(err => {
            console.log(err)
            toast.error('Error adding product')
        })
    }

  return (
    <div className='w-full bg-slate-800 font-nunito text-slate-50 min-h[calc(100vh-60px)] flex flex-col justify-center items-center'>
        <h1 className='text-md md:text-xl pt-5'>Add Product</h1>
       
        <form onSubmit={newProduct} className='w-full min-h[calc(100vh-60px)] md:w-[75%] lg:w-[50%] px-3'>
            <div className='w-full mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={name} className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full ' onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='w-full mb-2'>
                <label htmlFor="">Price</label>
                <input type="text" name='price' value={price} className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full' onChange={(e)=>setPrice(e.target.value)} />
            </div>
            
            <div className='w-full mb-2'>
                <label htmlFor="">Quantity</label>
                <input type="number" name='quantity' value={quantity} min='1' max='100' className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full' onChange={(e)=>setQuantity(e.target.value)} />
            </div>

            <div className='w-full mb-2'>
                <label htmlFor="">Category</label>
                <select  name='category' value={category} className='my-1 bg-slate-800 border-2 border-slate-50 text-slate-50 py-1 px-2 w-full' onChange={(e)=>setCategory(e.target.value)} >
                    <option>Select Product Category</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Clothes'>Clothes</option>
                    <option value='Food'>Foods</option>
                </select>
            </div>

            <div className='w-full mb-2'>
                <label htmlFor="">image</label>
                <input type="file" name='product_image'   className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full' onChange={(e)=>setProduct_Image(e.target.files[0])} />
            </div> 
            <div className='w-full mb-2'>
                <label htmlFor="">Description</label>
                <textarea  id="" cols="30" rows="3" name='description' value={description} className='my-1 bg-transparent border-2 border-slate-50 py-1 px-2 w-full' onChange={(e)=>setDescription(e.target.value)} >
                </textarea>
            </div>
            <div className='w-full mb-10 flex justify-center items-center'>
                <button type='submit' className='my-1 bg-transparent border-2 border-slate-50 py-2 px-2 w-full md:w-[50%] rounded-xl '>Create Product</button>
            </div>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default AddProduct