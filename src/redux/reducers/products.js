import {GET_PRODUCTS_FAILURE,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_SINGLE_PRODUCT_FAILURE,GET_SINGLE_PRODUCT_REQUEST,GET_SINGLE_PRODUCT_SUCCESS,ADD_PRODUCT_FAILURE,ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAILURE,UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAILURE,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS} from '../types'


export const productReducer=(state=[],action)=>{
    const{type,payload}=action;
    switch(type){
        case GET_PRODUCTS_REQUEST:
            return{
                ...state, 
                loading:true
            }
        case GET_PRODUCTS_SUCCESS:
            // console.log(payload.products) 
            return{
                ...state,
                loading:false,
                products:payload
            }
        case GET_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false, 
                error:payload
            }
        case GET_SINGLE_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            // console.log(payload)
            return{
                ...state, 
                loading:false,
                product:payload
            }
        case GET_SINGLE_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:payload
            }
        case ADD_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                product:payload
            }
        case ADD_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:payload
            }
        case UPDATE_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case UPDATE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                product:payload
            }
        case UPDATE_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:payload
            }
        case DELETE_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                product:payload
            }
        case DELETE_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state;
    }
}