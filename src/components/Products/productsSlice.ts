import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../types/ProductType';
import { getProducts } from '../../utils/productsApi/getProducts';

export interface ProductsState {
    value: ProductType[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
    value: [],
    status: 'idle'
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await getProducts();
      return response?.data;
    }
  );

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
      productsIncrement(state,action){
        state.value = state.value.map((item) => {
          if(item.id === action.payload.id && item.amount !== undefined){
            item.amount += 1;
          }
          return item;
        })
      },
      productsDecrement(state,action){
        state.value = state.value.map((item) => {
          if(item.id === action.payload.id && item.amount !== undefined){
            item.amount -= 1;
          }
          return item;
        })
      },
      productDelete(state,action){
        state.value = state.value.filter(item => item.id != action.payload);
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'idle';
            action.payload = action.payload.map((item:ProductType) => {return {...item, amount:1}})
            state.value = action.payload;
          })
          .addCase(fetchProducts.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export const { productsIncrement,productDelete,productsDecrement } = productsSlice.actions;

export default productsSlice.reducer;