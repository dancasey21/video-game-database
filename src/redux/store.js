import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import accountReducer from "./accountSlice";

export const store = configureStore(
  {
    reducer: {
      game: gameReducer,
      account: accountReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
