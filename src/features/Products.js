import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import product_service from '../helpers/product_service';

const initialState = []

//get products
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await product_service.getProducts();
        return res.data.products;
    }
)




//create product
export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product) => {
        try {
            const res = await product_service.addProduct(product);
            return res.data.product;
    }
    catch (error) {
        return error;
    } 
}
)

//update product
export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (id, product) => {
        try {
            const res = await product_service.editProduct(id, product);
            return res.data.product;
        } catch (error) {
            return error;
        }
    }
)

//delete product
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id) => {
        try {
            const res = await product_service.deleteProduct(id);
            return res.data.product;
        } catch (error) {
            return error;
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [createProduct.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        //get product all products      
        [getProducts.fulfilled]: (state, action) => {             
            return [...action.payload];
        },
 

     



        [updateProduct.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [deleteProduct.fulfilled]: (state, action) => {
            return [...action.payload];
        }
    }
})

const { reducer } = productsSlice;
export default reducer;