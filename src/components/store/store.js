import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from './slices/navbarSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export default store;
