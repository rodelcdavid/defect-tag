import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import authReducer from "../slices/authSlice";
import dialogReducer from "../slices/dialogSlice";

import { defectTagAPI } from "./defectTagAPI";

export const store = configureStore({
  reducer: {
    authState: authReducer,
    dialogState: dialogReducer,
    [defectTagAPI.reducerPath]: defectTagAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(defectTagAPI.middleware),
});

setupListeners(store.dispatch);
