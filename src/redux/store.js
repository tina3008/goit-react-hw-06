import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, filtersReducer } from "./reducer";

// const rootreduser = (state, action) => {
//   return state;
// }
export const store = configureStore({
  reducer: {
    state: tasksReducer,
    action: filtersReducer,
  },
});
