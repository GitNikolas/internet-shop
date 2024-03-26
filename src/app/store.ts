import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sliceReducer from '../components/Products/productsSlice';

export const store = configureStore({
  reducer: {
    products: sliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
