import { configureStore } from "@reduxjs/toolkit";
import mailReducer from '../slices/mailSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer
  },
});
