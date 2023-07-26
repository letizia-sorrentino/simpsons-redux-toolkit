import { configureStore } from '@reduxjs/toolkit';
import simpsonsManagerReducer from '../features/simpsonsManager/simpsonsManagerSlice';

export const store = configureStore({
  reducer: {
    simpsonsManager: simpsonsManagerReducer,
  },
});
