import { createSlice } from '@reduxjs/toolkit';
import newsApi from '../../../data/news.json';
import { projects } from '../../../data/projects';

const { news } = newsApi.result;

const initialState = {
  news,
  projects,
  hidden: false,
  currentNewsId: 1,
  nextElements: [],
  prevElements: [],
};

console.log('initialState', initialState);
const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setCurrentNewsId: (state, { payload }) => {
      state.currentNewsId = payload;
    },
    setHidden: (state, { payload }) => {
      state.hidden = payload;
    },
    pushToNextElements: (state, { payload }) => {
      state.nextElements = [...state.nextElements, payload];
    },
    pushToPrevElements: (state, { payload }) => {
      state.prevElements = [payload, ...state.prevElements];
    },
  },
});

export const { actions } = navbarSlice;
export default navbarSlice.reducer;
