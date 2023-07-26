import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const simpsonsManagerSlice = createSlice({
  name: 'simpsonsManager',
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
} = simpsonsManagerSlice.actions;

export const selectSimpsons = (state) => state.simpsonsManager.simpsons; //to import in App.js
export const selectSearchInput = (state) => state.simpsonsManager.searchInput; //to import in App.js
export const selectLikeInput = (state) => state.simpsonsManager.likeInput; //to import in App.js

export default simpsonsManagerSlice.reducer;
