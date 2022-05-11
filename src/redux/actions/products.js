import product_services from '../../helpers/product_service' 
import {GET_PRODUCTS_FAILURE,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_SINGLE_PRODUCT_FAILURE,GET_SINGLE_PRODUCT_REQUEST,GET_SINGLE_PRODUCT_SUCCESS,ADD_PRODUCT_FAILURE,ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAILURE,UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAILURE,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS} from '../types'


export const getProducts=()=>async dispatch=>{
    dispatch({
        type:GET_PRODUCTS_REQUEST
    })
    try{
        const res=await product_services.getProducts();      
        // console.log(data.data) 
        dispatch({
            type:GET_PRODUCTS_SUCCESS, 
            payload:res.data
        })    
        return Promise.resolve(res.data)   
    }
    catch(error){
        dispatch({
            type:GET_PRODUCTS_FAILURE,
            payload:error
        })
        return Promise.reject(error)
    }
}

//get product by id
export const getProduct=id=>async dispatch=>{
    dispatch({
        type:GET_SINGLE_PRODUCT_REQUEST
    })
    try{
        const res=await product_services.getProduct(id);       
        dispatch({
            type:GET_SINGLE_PRODUCT_SUCCESS,
            payload:res.data
        })    
        return Promise.resolve(res.data);
    } catch (err) {
        dispatch({ 
            type:GET_SINGLE_PRODUCT_FAILURE,
            payload:err
          })
      return Promise.reject(err);     
    }
}

//create product
export const createProduct=product=>async dispatch=>{
    dispatch({
        type:ADD_PRODUCT_REQUEST
    })
    try{
        const res=await product_services.addProduct(product);
        dispatch({
            type:ADD_PRODUCT_SUCCESS,
            payload:res.data
        })
        return Promise.resolve(res.data);
    }
    catch(error){
        dispatch({
            type:ADD_PRODUCT_FAILURE,
            payload:error
    })
    return Promise.reject(error);
}}

//update product
export const updateProduct=(id,product)=>async dispatch=>{
    dispatch({
        type:UPDATE_PRODUCT_REQUEST
    })
    try{
        const res=await product_services.editProduct(id,product);
        dispatch({
            type:UPDATE_PRODUCT_SUCCESS,
            payload:res.data
        })
        console.log(res.data)
        return Promise.resolve(res.data);
    }
    catch(error){
        dispatch({
            type:UPDATE_PRODUCT_FAILURE,
            payload:error
        })
        return Promise.reject(error);
    }
}


//delete product
export const deleteProduct=id=>async dispatch=>{
    dispatch({
        type:DELETE_PRODUCT_REQUEST
    })
    try{
        const res=await product_services.deleteProduct(id);
        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:res.data
        })
        return Promise.resolve(res.data);
    }
    catch(error){
        dispatch({
            type:DELETE_PRODUCT_FAILURE,
            payload:error
        })
        return Promise.reject(error);
    }
}

