import { configureStore } from '@reduxjs/toolkit';
import animaliReducer from './AnimaliSlice';

const store = configureStore({
  reducer: {
    animali: animaliReducer,
  },
});

export default store;