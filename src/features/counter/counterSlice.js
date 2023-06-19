import { createSlice } from '@reduxjs/toolkit';
//import { fetchCount } from './counterAPI';

const initialState = {};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  
    setSimpsons: (state, action) => {
      state.simpsons = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },

    setLikeInput: (state, action) => {
      state.likeInput = action.payload;
    },
    
    // wire up delete button
    deleteItem: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      state.simpsons.splice(indexOf, 1);
    },

    // Function to update the character to toggle between like/dislike
    toggleLike: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });

      // invert if liked or not liked
      state.simpsons[indexOf].liked = !state.simpsons[indexOf].liked;
    },
  },

},
);

export const {
  deleteItem,
  toggleLike,
  setSimpsons,
  setSearchInput,
  setLikeInput,
} = counterSlice.actions;

export const selectSimpsons = (state) => state.counter.simpsons; //to import in App.js
export const selectSearchInput = (state) => state.counter.searchInput; //to import in App.js
export const selectLikeInput = (state) => state.counter.likeInput; //to import in App.js

export default counterSlice.reducer;
