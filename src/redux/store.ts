import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import calls from './slices/callsSlice';
import dateSort from './slices/dateSortSlice';
import typeSort from './slices/typeSortSlice';

export const store = configureStore({
  reducer: {
    calls,
    dateSort,
    typeSort,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
