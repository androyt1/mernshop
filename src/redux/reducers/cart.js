import {ADD_TO_CART,REMOVE_FROM_CART,INCREMENT_QUANTITY,DECREMENT_QUANTITY,CLEAR_CART} from '../types'
import { toast } from 'react-toastify'



//create cart reducer
export const cartReducer = (cart = [], action) => {
    switch (action.type) {         
        case ADD_TO_CART:          
           //check if product is already in cart
           let prod=cart.filter((item)=>item._id===action.payload._id)
           if(prod.length < 1){
               toast.success(`${action.payload.name} added to cart`)
               return [...cart,action.payload]
           }else{
                toast.error('Product already in cart')
               return cart           }
               
        case REMOVE_FROM_CART:
            toast.success(`Item removed from cart`)
            return cart.filter(product => product._id !== action.payload);
            
        case INCREMENT_QUANTITY:           
        let ditem=cart.filter((item)=>item._id === action.payload)
        if(ditem.length > 0){
            return cart.map((item)=>{
                if(item._id === action.payload){                 
                    return {...item,count:item.count + 1}
                }else{
                    return item
                }
            })
        }
                break;
        case DECREMENT_QUANTITY:
            //find the item in cart
            let item2=cart.filter((item)=>item._id===action.payload)
            //check if item is already in cart
            if(item2.length > 0){
                //decrement item count
                return cart.map(product => {
                    if(product._id === action.payload){                       
                        return {...product,count:product.count - 1}
                    }else{
                        return product
                    }
                })
            }
            break;
        case CLEAR_CART: 
            toast.success(`Cart cleared`)
            return [];
            
        default:
            return cart;
    }
}