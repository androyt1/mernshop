import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import product_service from '../helpers/product_service'


//get product by id
export const getProduct = createAsyncThunk(
    'product/getProduct',
    async (id) => {
        const res = await product_service.getProduct(id);
        return res.data.product;
    }
)

//create product slice
const productSlice = createSlice({
    name: 'product',
    initialState: {value:{}},
    reducers: {},
    extraReducers: {
        [getProduct.fulfilled]: (state, action) => {
            state.value = action.payload;
        }
    }
})

const {reducer} = productSlice;
export default reducer;
