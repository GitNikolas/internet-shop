import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../components/Basket/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // user:
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
