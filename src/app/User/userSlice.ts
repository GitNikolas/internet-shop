import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types/UserType';
import { getUser as getMyUser } from '../../utils/usersApi/usersApi';

export interface UserState {
    value: UserType;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
    value: {} as UserType,
    status: 'loading'
}

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
      const response = await getMyUser();
      const data = await response.json();
      return data;
    }
  );

export const userSlice = createSlice({
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
            state.value = action.payload;
            state.value.isAuthorized = true;
            console.log(state.value);
          })
          .addCase(getUser.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export const {  } = userSlice.actions;

export default userSlice.reducer;