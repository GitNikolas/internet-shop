import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types/UserType';
import { getUser as getMyUser } from '../../utils/usersApi/usersApi';

export interface UserState {
    value: UserType;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
    value: {} as UserType,
    status: 'idle'
}

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
      const response = await getMyUser();
      return response?.data;
    }
  );

export const productsSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
      
    },
    extraReducers: (builder) => {
        builder
          .addCase(getUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getUser.fulfilled, (state, action) => {
            state.status = 'idle';
            action.payload = action.payload.map((item:UserType) => {return {...item, amount:1}})
            state.value = action.payload;
          })
          .addCase(getUser.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export const {  } = productsSlice.actions;

export default productsSlice.reducer;