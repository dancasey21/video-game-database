import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameData: (state, { payload }) => {
      state.gameData = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
  },
});

export const { setGameData, setSearchTerm, setMessage } = gameSlice.actions;

//gets data from store
export const selectGameData = (state) => state.game.gameData;
export const selectSearchTerm = (state) => state.game.searchTerm;
export const selectMessage = (state) => state.game.message;
export const selectSingleGame = (slug) => (state) => {
  return state.game.gameData.find((game) => {
    return game.slug === slug;
  });
};

export default gameSlice.reducer;
