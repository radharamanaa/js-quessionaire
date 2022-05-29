import { configureStore } from "@reduxjs/toolkit";
import questionSliceReducer from "../features/question/questionSlice";

export const store = configureStore({
  reducer: {
    question: questionSliceReducer,
  },
});
