import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './features/Products'
import SingleProductReducer from './features/Product'

const reducer = {
  products: ProductReducer , 
    product: SingleProductReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
}) 

export default store;