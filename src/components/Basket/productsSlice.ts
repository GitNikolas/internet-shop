import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../types/ProductType';
import { getUserProducts } from '../../utils/productsApi/productsApi';
import { deleteProduct, postProduct } from '../../utils/productsApi/productsApi';


export interface ProductsState {
    value: ProductType[];
    status: 'idle' | 'loading' | 'failed';
    error: any;
}

const initialState: ProductsState = {
    value: [],
    status: 'idle',
    error: '',
}

  export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
      try {
        const response = await getUserProducts();
        if(!response.ok){
          throw new Error(response.statusText);
        }
        return await response.json();
      } catch(err:any) {
        return rejectWithValue(err.message);
      }
    }
  );

  export const pstProduct = createAsyncThunk(
    'products/pstProduct',
    async (data:ProductType) => {
      const response = await postProduct(data);
      return response;
    }
  );

  export const delProduct = createAsyncThunk(
    'products/delProduct',
    async (id:number) => {
      const response = await deleteProduct(id);
      return response;
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
    extraReducers: 
    (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
            state.error = '';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'idle';
            state.error = '';
            state.value = action.payload;
          })
          .addCase(fetchProducts.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.payload;
            console.log(action.payload);
          })

          .addCase(delProduct.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(delProduct.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = state.value.filter(product => product.id !== action.payload.id);
          })
          .addCase(delProduct.rejected, (state) => {
            state.status = 'failed';
          })

          .addCase(pstProduct.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(pstProduct.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value.push(action.payload);
          })
          .addCase(pstProduct.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export const { productsIncrement,productDelete,productsDecrement } = productsSlice.actions;

export default productsSlice.reducer;