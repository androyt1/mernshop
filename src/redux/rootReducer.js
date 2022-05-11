import {productReducer} from './reducers/products'
import { cartReducer } from './reducers/cart'
import {combineReducers} from 'redux'

export const rootReducer=combineReducers({
    allProducts:productReducer,
    cart:cartReducer   
})