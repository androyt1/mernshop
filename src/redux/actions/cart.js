import {ADD_TO_CART,REMOVE_FROM_CART,INCREMENT_QUANTITY,DECREMENT_QUANTITY,CLEAR_CART} from '../types'


export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }    
}

//remove from cart
export const removeFromCart = (id) => {    
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }

}

//increament quantity
export const incrementQuantity = (id) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: id
    }
}

//decrement quantity
export const decrementQuantity = (id) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: id
    }
}

//clear cart
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}