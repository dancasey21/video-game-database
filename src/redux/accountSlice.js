import { createSlice } from "@reduxjs/toolkit";
import sha256 from "sha256";
import { getStore, saveStore } from "./diskUtils";

const initialState = { screen: 0 };

const diskData = getStore();

export const accountSlice = createSlice({
  name: "account",
  initialState: diskData ? diskData : initialState,
  reducers: {
    setNewUser: (state, { payload }) => {
      payload.password = sha256(payload.password + "gaming");
      state.user = payload;
      saveStore(state);
    },
    setScreen: (state, { payload }) => {
      state.screen = payload;
    },
    setLoggedIn: (state) => {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { setNewUser, setScreen, setLoggedIn } = accountSlice.actions;

export const selectScreen = (state) => state.account.screen;
export const selectUser = (state) => state.account.user;
export const selectLoggedIn = (state) => state.account.loggedIn;

export default accountSlice.reducer;
